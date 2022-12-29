import { r as registerInstance, h, i as getElement } from './index-136245cb.js';
import { i as interpret, m as machineDataSelection } from './machines-438a9bba.js';

const appFormsCss = "app-forms{}";

const AppForms = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this._machineDataSelectionService = interpret(machineDataSelection);
    this.handleButtonClick = () => {
      const _ionSelectValue = this.el.querySelector('.select-option ion-select').value;
      console.log(_ionSelectValue);
      // set always SELECTION first, so it could later send the value of _ionSelectValue
      // if not, the machine it will not work, check the machine configuration
      this._machineDataSelectionService.send('SELECTION');
      this._machineDataSelectionService.send(_ionSelectValue);
    };
    this.state_machineDataSelection = machineDataSelection.initialState;
  }
  async componentWillLoad() {
    //@ts-ignore
    this._machineDataSelectionService.start();
    this._machineDataSelectionService.subscribe(state => {
      this.state_machineDataSelection = state;
    });
  }
  componentDidRender() {
    console.log(this.state_machineDataSelection.value);
  }
  async _onClickSelectAssets() {
    const _optionValue = this.el.querySelector('.select-option ion-select').value;
    if (_optionValue === 'SELECT_CONTAINERS') {
      this._machineDataSelectionService.send("SELECT_CONTAINERS");
    }
    // decide what to pass if there is a "watchlists only" selection or filter assets selection
    if (_optionValue === 'SELECT_WATCHLISTS') {
      this._machineDataSelectionService.send("SELECT_WATCHLISTS");
    }
    // decide what to pass if the selection are only assets
    if (_optionValue === 'FILTER_ASSETS') {
      this._machineDataSelectionService.send("FILTER_ASSETS");
    }
  }
  render() {
    return (h("ion-content", { scrollEvents: true }, h("div", { class: "container" }, h("div", null, this.state_machineDataSelection.matches("selection") && (h("div", null, h("ion-item", { class: "select-option" }, h("ion-label", null, "Select Option"), h("ion-select", null, h("ion-select-option", { value: "SELECT_CONTAINERS" }, "Select Containers"), h("ion-select-option", { value: "SELECT_WATCHLISTS" }, "Select Watchlists"), h("ion-select-option", { value: "FILTER_ASSETS" }, "Filter Assets")), h("ion-button", { onClick: () => this.handleButtonClick() }, "Send Value"))))), h("div", null, this.state_machineDataSelection.matches("selection.containersForm") && (
    // Render form for selecting containers
    h("div", { class: "selection select-watchlists-container" }, h("div", null, "Filter Watchlists Container"), h("ion-item", { class: "select--watchlists-container" }, h("ion-label", null, "Watchlist Containers"), h("ion-select", { multiple: true, interface: 'popover' }, h("ion-select-option", null, "option 1"), h("ion-select-option", null, "option 2"))), h("div", null, h("ion-button", { onClick: () => this._onClickSelectAssets() }, "Select Assets")))), this.state_machineDataSelection.matches("selection.watchlistsForm") && (
    // Render form for selecting watchlists
    h("div", { class: "selection select-watchlists-only" }, h("div", null, "Filter Watchlists Only"), h("ion-item", { class: "select--watchlists-only" }, h("ion-label", null, "Watchlists"), h("ion-select", { multiple: true, interface: 'popover' }, h("ion-select-option", null, "option 1"), h("ion-select-option", null, "option 2"))), h("div", null, h("ion-button", { onClick: () => this._onClickSelectAssets() }, "Select Assets")))), this.state_machineDataSelection.matches("selection.filteringForm") && (
    // Render form for filtering assets
    h("div", { class: "selection select-assets" }, h("div", null, "Filter Assets"), h("div", null, h("ion-item", { class: "select--asset-type" }, h("ion-label", null, "Asset Type"), h("ion-select", { multiple: true, interface: 'popover' }, h("ion-select-option", null, "option 1"))), h("ion-item", { class: "select--asset-broker" }, h("ion-label", null, "Broker"), h("ion-select", { multiple: true, interface: 'popover' }, h("ion-select-option", null, "option 1"))), h("ion-item", { class: "select--asset-exchange" }, h("ion-label", null, "Exchange"), h("ion-select", { multiple: true, interface: 'popover' }, h("ion-select-option", null, "option 1")))), h("div", null, h("ion-button", { onClick: () => this._onClickSelectAssets() }, "Select Assets")))))), h("div", { class: "grid-container" })));
  }
  get el() { return getElement(this); }
};
AppForms.style = appFormsCss;

export { AppForms as app_forms };
