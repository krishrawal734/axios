import type { WebStorage } from "redux-persist/lib/types";

export function createPersistStorage(): WebStorage {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }

  const storage = window.localStorage;

  return {
    getItem(key) {
      return Promise.resolve(storage.getItem(key));
    },
    setItem(key, item) {
      return Promise.resolve(storage.setItem(key, item));
    },
    removeItem(key) {
      return Promise.resolve(storage.removeItem(key));
    },
  };
}
