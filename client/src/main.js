import 'bootstrap';
import authConfig from 'auth-config.js';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-bs-modal')
    .plugin('aurelia-validation', (config) => config.useLocale('pl-PL'))
    .plugin('aurelia-auth', (baseConfig) => baseConfig.configure(authConfig));


  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');
  //if the css animator is enabled, add swap-order="after" to all router-view elements

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then((a) => a.setRoot());
}
