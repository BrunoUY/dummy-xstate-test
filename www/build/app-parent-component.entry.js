import { r as registerInstance, h } from './index-136245cb.js';
import { i as interpret, m as machineTestHandleData } from './machines-a30e72ff.js';

const appParentComponentCss = "app-parent-component{}";

const AppParentComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this._machineTestHandleData = interpret(machineTestHandleData);
    this._sendDataToMachine = () => {
      console.log('save_data to machine');
      this._machineTestHandleData.send('SAVE_DATA', {
        data: {
          prop1: 'value1',
          prop2: 'value2'
        }
      });
      console.log(this._machineTestHandleData);
    };
  }
  render() {
    return (h("div", null, h("ion-button", { onClick: () => this._sendDataToMachine() }, "Send data to machine"), h("app-child-componen", null)));
  }
};
AppParentComponent.style = appParentComponentCss;

export { AppParentComponent as app_parent_component };
