// Polyfill crypto.randomUUID for runtimes that don't provide it (used by IBM Products components).
(() => {
  const makeRandomUUID = () => {
    const cryptoSource = (globalThis as any).crypto;
    if (cryptoSource && typeof cryptoSource.getRandomValues === "function") {
      const bytes = new Uint8Array(16);
      cryptoSource.getRandomValues(bytes);
      bytes[6] = (bytes[6] & 0x0f) | 0x40;
      bytes[8] = (bytes[8] & 0x3f) | 0x80;
      const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0"));
      return `${hex[0]}${hex[1]}${hex[2]}${hex[3]}-${hex[4]}${hex[5]}-${hex[6]}${hex[7]}-${hex[8]}${hex[9]}-${hex[10]}${hex[11]}${hex[12]}${hex[13]}${hex[14]}${hex[15]}`;
    }

    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
      const rand = Math.random() * 16;
      const value = char === "x" ? rand : (rand % 4) + 8;
      return Math.floor(value).toString(16);
    });
  };

  const ensureRandomUUID = () => {
    const cryptoObj = (globalThis as any).crypto;
    if (cryptoObj && typeof cryptoObj.randomUUID === "function") {
      return;
    }

    const randomUUID = makeRandomUUID;

    const attach = (target: any) => {
      if (!target || typeof target.randomUUID === "function") {
        return typeof target?.randomUUID === "function";
      }

      try {
        Object.defineProperty(target, "randomUUID", {
          value: randomUUID,
          configurable: true
        });
      } catch (_error) {
        try {
          target.randomUUID = randomUUID;
        } catch (_inner) {
          // no-op
        }
      }

      return typeof target.randomUUID === "function";
    };

    if (attach(cryptoObj)) {
      return;
    }

    if (cryptoObj) {
      try {
        if (attach(Object.getPrototypeOf(cryptoObj))) {
          return;
        }
      } catch (_error) {
        // no-op
      }
    }

    const CryptoClass = (globalThis as any).Crypto;
    if (CryptoClass?.prototype && attach(CryptoClass.prototype)) {
      return;
    }

    if (!cryptoObj) {
      const fallbackCrypto: Record<string, any> = { randomUUID };
      try {
        Object.defineProperty(globalThis, "crypto", {
          value: fallbackCrypto,
          configurable: true,
          writable: true
        });
      } catch (_error) {
        try {
          (globalThis as any).crypto = fallbackCrypto;
        } catch (_inner) {
          // no-op
        }
      }
    }
  };

  ensureRandomUUID();
})();
