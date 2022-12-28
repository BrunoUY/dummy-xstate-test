import { i as initialize } from './ionic-global-c4648f25.js';

// import { setupConfig } from '@ionic/core';
const appGlobalScript = () => {
  // setupConfig({
  //   mode: 'ios'
  // });
};

const globalScripts = () => {
  appGlobalScript();
  initialize();
};

export { globalScripts as g };
