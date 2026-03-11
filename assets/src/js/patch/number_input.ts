const numberInputGuard = {
  id: "carbon-number-input-guard",
  apply: (code: string) => {
    const replacements: Array<[RegExp, string]> = [
      [/this\._step\.toString\(\)/g, '(this._step ?? "1").toString()'],
      [/this\._min\.toString\(\)/g, '(this._min ?? "").toString()'],
      [/this\._max\.toString\(\)/g, '(this._max ?? "").toString()'],
      [/\.requestUpdate\(\)/g, ".requestUpdate?.()"],
    ];

    let patched = code;
    replacements.forEach(([pattern, replacement]) => {
      patched = patched.replace(pattern, replacement);
    });

    return { code: patched, changed: patched !== code };
  },
};

export default numberInputGuard;
