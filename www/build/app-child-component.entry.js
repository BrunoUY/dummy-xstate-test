import { r as registerInstance, h } from './index-136245cb.js';
import { i as interpret, m as machineTestHandleData } from './machines-a30e72ff.js';

const appChildComponentCss = "app-child-component{}";

const AppChildComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this._machineTestHandleData = interpret(machineTestHandleData);
    this.state_machineTestHandleData = machineTestHandleData.initialState;
  }
  componentWillLoad() {
    this._machineTestHandleData.subscribe((state) => {
      this.state_machineTestHandleData = state;
    });
    this._machineTestHandleData.onTransition((state) => {
      console.log(`Machine state changed: ${state.value}`);
      console.log(state.context);
    });
  }
  componentDidRender() {
    console.log('componentDidRender');
    console.log(this.state_machineTestHandleData.value);
  }
  render() {
    return (h("div", null, h("p", null, this.state_machineTestHandleData.context.data, "!")));
  }
};
AppChildComponent.style = appChildComponentCss;

export { AppChildComponent as app_child_component };
