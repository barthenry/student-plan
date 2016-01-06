import {inject} from 'aurelia-framework';
import {FetchConfig, AuthorizeStep} from 'aurelia-auth';
import {Modal} from './models';

@inject(FetchConfig)
export class App {
  constructor(fetchConfig) {
    this.fetchConfig = fetchConfig;

    this.shareModal = new Modal({
      title: 'Podziel się planem',
      buttonId: 'shareTriggerButton'
    });

    this.loginModal = new Modal({
      title: 'Logowanie',
      buttonId: 'loginTriggerButton'
    });

    this.registerModal = new Modal({
      title: 'Rejestracja',
      buttonId: 'registerTriggerButton'
    });
  }

  activate() {
    this.fetchConfig.configure();
  }

  configureRouter(config, router) {
    config.title = 'Student Plan';
    config.addPipelineStep('authorize', AuthorizeStep);

    config.map([
      { route: ['', 'creator'], name: 'creator',    moduleId: './plan-creator',   title: 'Kreator planu' },
      { route: 'add-group',     name: 'add-group',  moduleId: './add-group',      title: 'Dodaj grupę' },
      { route: 'share',         name: 'share',      moduleId: './share',          title: 'Podziel się planem' },
      { route: 'register',      name: 'register',   moduleId: './register',       title: 'Zarejestruj' },
      { route: 'login',         name: 'login',      moduleId: './login',          title: 'Zaloguj' },
      { route: 'profile',       name: 'profile',    moduleId: './profile',        title: 'Profil', auth: true },
      { route: 'logout',        name: 'logout',     moduleId: './logout',         title: 'Logout', auth: true }
    ]);

    this.router = router;
  }
}
