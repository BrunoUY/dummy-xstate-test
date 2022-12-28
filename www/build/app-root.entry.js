import { r as registerInstance, h } from './index-136245cb.js';

const appRootCss = "";

const AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ion-app", null, h("ion-router", { useHash: false }, h("ion-route", { url: "/app-forms", component: "app-forms" }), h("ion-route", { url: "/", component: "app-parent-component" })), h("ion-nav", null)));
  }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
