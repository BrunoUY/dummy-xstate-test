import { r as registerInstance, h } from './index-136245cb.js';
import { t as testHandleDataService } from './machines-438a9bba.js';

const appChildComponentCss = "app-child-component{}";

const AppChildComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.state_machineTestHandleData = undefined;
  }
  componentWillLoad() {
    testHandleDataService.subscribe(state => {
      this.state_machineTestHandleData = state;
    });
<<<<<<< Updated upstream
=======
    this._machineTestHandleData.onTransition((state) => {
      console.log(`Machine state changed: ${state.value}`);
    });
  }
  componentDidRender() {
    console.group('componentDidRender');
    console.log(this.state_machineTestHandleData.value);
    console.groupEnd();
>>>>>>> Stashed changes
  }
  render() {
    if (this.state_machineTestHandleData.matches('saved'))
      return (h("div", null, h("p", null, this.state_machineTestHandleData.context.data)));
    else
      return h("div", null);
  }
};
AppChildComponent.style = appChildComponentCss;

export { AppChildComponent as app_child_component };
