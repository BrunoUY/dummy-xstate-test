import { r as registerInstance, h, j as Host } from './index-136245cb.js';
import { g as getIonMode } from './ionic-global-c4648f25.js';

const rowCss = ":host{display:flex;flex-wrap:wrap}";

const Row = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: getIonMode(this) }, h("slot", null)));
  }
};
Row.style = rowCss;

export { Row as ion_row };
