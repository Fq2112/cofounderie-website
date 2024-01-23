import { create } from "zustand";
import { persist } from "zustand/middleware";

export default class ZustandHelper {
  setup = () => {};
  devOpts = {};
  middleware = {
    name: null,
    getStorage: () => localStorage,
  };

  constructor(params) {
    const {
      setup,
      name = (Math.random() + 1).toString(36).substring(7),
      enabled = true,
      middleware,
    } = params;
    const { middlewareName } = middleware ?? {};

    this.setup = setup;

    this.devOpts = {
      name,
      enabled,
      anonymousActionType: name,
    };
    if (middlewareName)
      this.middleware = { ...this.middleware, name: middlewareName };
  }

  get() {
    return create(
      this.middleware.name
        ? persist(this.setup, {
            name: this.middleware.name,
            getStorage: this.middleware.getStorage,
            serialize: (state) => btoa(JSON.stringify(state)),
            deserialize: (str) => JSON.parse(atob(str)),
          })
        : this.setup
    );
  }
}
