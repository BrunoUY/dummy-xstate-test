import { r as registerInstance, h } from './index-136245cb.js';
import { t as testHandleDataService } from './machines-299b28aa.js';

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
  }
  componentDidRender() {
    console.log(this.state_machineTestHandleData.context);
  }
  render() {
    if (this.state_machineTestHandleData.matches('saved'))
      return (h("div", null, "data from:", h("p", null, this.state_machineTestHandleData.context.data)));
    else
      return h("div", null);
  }
};
AppChildComponent.style = appChildComponentCss;

export { AppChildComponent as app_child_component };
