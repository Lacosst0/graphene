const esbuild = require("esbuild");
const fs = require("fs/promises");
const path = require("path");
const sass = require("sass");
const { createRequire } = require("module");

const args = process.argv.slice(2);
const getArgValue = (key, defaultValue) => {
  const index = args.indexOf(key);
  return index !== -1 && args.length > index + 1 ? args[index + 1] : defaultValue;
};
const watch = args.includes('--watch');
const deploy = args.includes('--deploy');
const envFlag = (value) =>
  ["1", "true", "yes", "on"].includes(String(value || "").toLowerCase());
const envFalse = (value) =>
  ["0", "false", "no", "off"].includes(String(value || "").toLowerCase());
const noChunks =
  envFlag(process.env.GRAPHENE_NO_CHUNKS) ||
  envFlag(process.env.GRAPHENE_NO_CHUNKING) ||
  envFlag(process.env.GRAPHENE_DISABLE_CHUNKS) ||
  envFalse(process.env.GRAPHENE_CHUNKS);
const allowUnchunkedAssets = envFlag(process.env.GRAPHENE_ALLOW_UNCHUNKED_ASSETS);
const outDir = getArgValue('--outdir', 'dist');
const outDirPath = path.resolve(__dirname, outDir);
const defaultOutDirPath = path.resolve(__dirname, "..", "priv", "static", "assets");
const isDefaultOutDir = outDirPath === defaultOutDirPath;

let enableChunks = deploy ? true : !noChunks;
if (noChunks && isDefaultOutDir && !allowUnchunkedAssets && !watch && !deploy) {
  console.warn(
    "[graphene] GRAPHENE_NO_CHUNKS ignored for priv/static/assets. Set GRAPHENE_ALLOW_UNCHUNKED_ASSETS=1 to override."
  );
  enableChunks = true;
}
const entryPoints = [
  path.join(__dirname, "src", "index.ts"),
  path.join(__dirname, "src", "graphene.scss"),
];


const loader = {
    '.woff': 'file',
    '.woff2': 'file',
};

const plugins = [
  {
    name: "sass",
    setup(build) {
      build.onLoad({ filter: /\.scss$/ }, async (args) => {
        const result = sass.compile(args.path, {
          loadPaths: [path.join(__dirname, "node_modules")],
          style: "expanded",
          quietDeps: true,
        });

        return {
          contents: result.css,
          loader: "css",
          resolveDir: path.dirname(args.path),
        };
      });
    },
  },
  {
    name: "carbon-web-components-extension",
    setup(build) {
      build.onResolve(
        { filter: /^@carbon\/web-components\/(es|lib)\// },
        (args) => {
          if (args.path.endsWith(".scss")) {
            return;
          }
          const normalized = args.path.endsWith(".js")
            ? args.path
            : `${args.path}.js`;
          return { path: path.join(__dirname, "node_modules", normalized) };
        }
      );
    },
  },
  {
    name: "carbon-number-input-step-fix",
    setup(build) {
      build.onLoad(
        {
          filter: /@carbon[\\/]web-components[\\/]es[\\/]components[\\/]number-input[\\/]number-input\\.js$/,
        },
        async (args) => {
          const contents = await fs.readFile(args.path, "utf8");
          const patched = contents.replace(
            "return this._step.toString();",
            'return (this._step ?? "1").toString();'
          );

          return { contents: patched, loader: "js" };
        }
      );
    },
  },
];

// Define esbuild options
let opts = {
    entryPoints,
    bundle: true,
    logLevel: "info",
    platform: "browser",
    target: "es2017",
    format: "esm",
    splitting: enableChunks,
    chunkNames: enableChunks ? "chunks/[name]-[hash]" : undefined,
    outdir: outDirPath,
    loader: loader,
    plugins: plugins,
};

async function applyComponentPatches(outDir) {
    const registryPath = path.join(__dirname, "src", "js", "patch", "index.ts");
    let patches = [];
    try {
        const result = await esbuild.build({
            entryPoints: [registryPath],
            bundle: true,
            format: "cjs",
            platform: "node",
            target: "es2017",
            write: false,
        });
        const module = { exports: {} };
        const registryRequire = createRequire(registryPath);
        // eslint-disable-next-line no-new-func
        const load = new Function(
            "require",
            "module",
            "exports",
            "__filename",
            "__dirname",
            result.outputFiles[0].text
        );
        load(registryRequire, module, module.exports, registryPath, path.dirname(registryPath));
        patches = module.exports.patches || module.exports.default || [];
    } catch (_error) {
        patches = [];
    }

    if (!Array.isArray(patches) || patches.length === 0) {
        return;
    }

    const walk = async (dir) => {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        const files = [];
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                files.push(...await walk(fullPath));
            } else if (entry.isFile() && entry.name.endsWith(".js")) {
                files.push(fullPath);
            }
        }
        return files;
    };

    try {
        const files = await walk(outDir);
        for (const file of files) {
            let contents;
            try {
                contents = await fs.readFile(file, "utf8");
            } catch (_error) {
                continue;
            }

            let patched = contents;
            for (const patch of patches) {
                if (patch?.matchPath && !patch.matchPath(file)) {
                    continue;
                }
                if (typeof patch?.apply === "function") {
                    const result = patch.apply(patched, file);
                    if (result?.changed) {
                        patched = result.code;
                    }
                }
            }

            if (patched !== contents) {
                await fs.writeFile(file, patched);
            }
        }
    } catch (_error) {
        // best-effort patch; ignore if file missing
    }
}

if (deploy) {
    opts = {
        ...opts,
        //minify: true,
        splitting: true,
        chunkNames: "chunks/[name]-[hash]",
    };
}

if (watch) {
    opts = {
        ...opts,
        sourcemap: "inline",
    };
    esbuild
        .context(opts)
        .then((ctx) => {
            ctx.watch();
        })
        .catch((_error) => {
            process.exit(1);
        });
} else {
    esbuild
        .build(opts)
        .then(() => applyComponentPatches(outDirPath))
        .catch((_error) => {
            process.exit(1);
        });
}
