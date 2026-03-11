const buttonKindGuard = {
  id: "carbon-button-kind-guard",
  apply: (code: string) => {
    if (!code.includes('kind.includes("danger")')) {
      return { code, changed: false };
    }

    let patched = code;

    if (patched.includes("kind, isExpressive") && !patched.includes("kind: kindValue")) {
      patched = patched.replace(
        "kind, isExpressive",
        "kind: kindValue, isExpressive"
      );
    }

    if (!patched.includes("const kind = kindValue ?? BUTTON_KIND.PRIMARY")) {
      patched = patched.replace(
        /kind: kindValue, isExpressive[^\n]*} = this;/,
        (match) => `${match}\n        const kind = kindValue ?? BUTTON_KIND.PRIMARY;`
      );
    }

    if (patched === code) {
      patched = patched.replace(
        /kind\.includes\("danger"\)/g,
        '(kind ?? "primary").includes("danger")'
      );
    }

    return { code: patched, changed: patched !== code };
  },
};

export default buttonKindGuard;
