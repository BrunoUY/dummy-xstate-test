import { r as registerInstance, h } from './index-136245cb.js';
import { i as interpret, a as machineTestHandleData } from './machines-9a233edf.js';

const appChildComponentCss = "app-child-component{}";

const AppChildComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this._machineTestHandleData = interpret(machineTestHandleData);
    this.state_machineTestHandleData = machineTestHandleData.initialState;
  }
  componentWillLoad() {
    this._machineTestHandleData.start();
    this._machineTestHandleData.subscribe((state) => {
      this.state_machineTestHandleData = state;
    });
    this._machineTestHandleData.onTransition((state) => {
      console.log(`Machine state changed: ${state.value}`);
    });
    console.log('componentWillLoad');
  }
  componentDidRender() {
    console.log('componentDidRender');
    console.log(this.state_machineTestHandleData.value);
  }
  render() {
    return (h("div", null, this.state_machineTestHandleData.matches("saved") && (h("p", null, this.state_machineTestHandleData.context))));
  }
};
AppChildComponent.style = appChildComponentCss;

export { AppChildComponent as app_child_component };
