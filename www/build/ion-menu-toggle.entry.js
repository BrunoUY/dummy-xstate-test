import { r as registerInstance, h, j as Host } from './index-136245cb.js';
import { g as getIonMode } from './ionic-global-c4648f25.js';
import { m as menuController } from './index-a1784755.js';
import { u as updateVisibility } from './menu-toggle-util-c419a37d.js';
import './hardware-back-button-fa04d6e9.js';
import './helpers-9b6adafa.js';
import './animation-cb1168ef.js';
import './index-5aa6aa3e.js';

const menuToggleCss = ":host(.menu-toggle-hidden){display:none}";

const MenuToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.visible = false;
    /**
     * Automatically hides the content when the corresponding menu is not active.
     *
     * By default, it's `true`. Change it to `false` in order to
     * keep `ion-menu-toggle` always visible regardless the state of the menu.
     */
    this.autoHide = true;
    this.onClick = () => {
      return menuController.toggle(this.menu);
    };
  }
  connectedCallback() {
    this.visibilityChanged();
  }
  async visibilityChanged() {
    this.visible = await updateVisibility(this.menu);
  }
  render() {
    const mode = getIonMode(this);
    const hidden = this.autoHide && !this.visible;
    return (h(Host, { onClick: this.onClick, "aria-hidden": hidden ? 'true' : null, class: {
        [mode]: true,
        'menu-toggle-hidden': hidden,
      } }, h("slot", null)));
  }
};
MenuToggle.style = menuToggleCss;

export { MenuToggle as ion_menu_toggle };
