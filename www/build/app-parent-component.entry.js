import { r as registerInstance, h } from './index-136245cb.js';
import { i as interpret, a as machineTestHandleData } from './machines-9a233edf.js';

const appParentComponentCss = "app-parent-component{}";

const AppParentComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this._machineTestHandleData = interpret(machineTestHandleData);
    this._sendDataToMachine = () => {
      console.log('save_data to machine');
      this._machineTestHandleData.send("SAVE_DATA", { text: 'data from parent component' });
      //console.log( this.state_machineTestHandleData.value, this._machineTestHandleData );
    };
    this.state_machineTestHandleData = machineTestHandleData.initialState;
  }
  componentWillLoad() {
    this._machineTestHandleData.start();
    this._machineTestHandleData.subscribe((state) => {
      this.state_machineTestHandleData = state;
    });
  }
  componentDidRender() {
    console.group('componentDidRender');
    console.log(this.state_machineTestHandleData.value);
    console.log(this.state_machineTestHandleData.context);
    console.groupEnd();
  }
  render() {
    return (h("div", null, h("ion-button", { onClick: () => this._sendDataToMachine() }, "Send data to machine"), this.state_machineTestHandleData.value, h("app-child-component", null)));
  }
};
AppParentComponent.style = appParentComponentCss;

export { AppParentComponent as app_parent_component };
