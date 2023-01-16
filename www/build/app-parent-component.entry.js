import { r as registerInstance, h } from './index-136245cb.js';
import { t as testHandleDataService } from './machines-80c6b46e.js';

const appParentComponentCss = "app-parent-component{}";

const AppParentComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this._sendDataToMachine = () => {
      testHandleDataService.send({ type: 'SAVE_DATA', text: 'data from parent component' });
    };
    this.state_machineTestHandleData = undefined;
  }
  componentWillLoad() {
    testHandleDataService.subscribe(state => {
      this.state_machineTestHandleData = state;
    });
  }
  componentDidRender() {
    console.log(this.state_machineTestHandleData);
  }
  render() {
    return (h("div", null, h("ion-button", { onClick: this._sendDataToMachine }, "Send data to machine"), this.state_machineTestHandleData.value, h("app-child-component", null)));
  }
};
AppParentComponent.style = appParentComponentCss;

export { AppParentComponent as app_parent_component };
