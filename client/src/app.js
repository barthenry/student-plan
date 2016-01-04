import {inject} from 'aurelia-framework';
import {FetchConfig} from 'aurelia-auth';
import {AuthorizeStep} from 'aurelia-auth';
import {Modal} from './models';

@inject(FetchConfig)
export class App {
    loginModal = null;
    registerModal = null;

    constructor(fetchConfig){
        this.fetchConfig = fetchConfig;
        this.loginModal = new Modal();
        this.registerModal = new Modal();

        this.loginModal
            .setTitle("Logowanie")
            .setTriggerButtonId("loginTriggerButton");

        this.registerModal
            .setTitle("Rejestracja")
            .setTriggerButtonId("registerTriggerButton");
    }

    activate(){
        this.fetchConfig.configure();
    }

  configureRouter(config, router) {
      config.title = 'Aurelia';
      config.addPipelineStep('authorize', AuthorizeStep);
      
      config.map([
          { route: ['', 'creator'], name: 'creator',  moduleId: './plan-creator',  nav: false, title: 'Kreator planu' },
          { route: 'add-group', name: 'add-group',  moduleId: './add-group',  nav: false, title: 'Dodaj grupę' },
          { route: 'share',     name: 'share',      moduleId: './share',      nav: false, title: 'Podziel się planem' },
          { route: 'register',  name: 'register',   moduleId: './register',   nav: false, title: 'Zarejestruj' },
          { route: 'login',     name: 'login',      moduleId: './login',      nav: false, title: 'Zaloguj' },
          { route: 'profile',     name: 'profile',      moduleId: './profile',      nav: false, title: 'Profil', auth: true },
          { route: 'logout',     name: 'logout',      moduleId: './logout',      nav: false, title: 'Logout', auth: true }
      ]);

      this.router = router;
  }
}
