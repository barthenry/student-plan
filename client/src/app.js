import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { FetchConfig, AuthorizeStep } from 'aurelia-auth';
import { filter, find } from 'lodash';
import { Modal } from './models';
import { createStore, combineReducers, initialState } from 'store.js';
import { coursesReducer, planReducer } from './reducers/courses.js';

@inject(FetchConfig, EventAggregator)
export class App {
  constructor(fetchConfig, events) {
    this.fetchConfig = fetchConfig;
    this.events = events;

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

    const store = createStore(combineReducers({
      courses: coursesReducer,
      plan: planReducer
    }), initialState, events);

    this.state = store.getState();

    this.events.subscribe('newState', () => {
      this.state = store.getState();

      this.events.publish('fc.events', this.getChosenGroups());
    });

    window.store = store;
  }

  activate() {
    this.fetchConfig.configure();
  }

  configureRouter(config, router) {
    config.title = 'Student Plan';
    config.addPipelineStep('authorize', AuthorizeStep);

    config.map([
        { route: ['', 'plan-creator'], name: 'plan-creator',    moduleId: './plan-creator',   title: 'Kreator planu' },
        { route: 'add-group',     name: 'add-group',  moduleId: './add-group',      title: 'Dodaj grupę' },
        { route: 'share',         name: 'share',      moduleId: './share',          title: 'Podziel się planem' },
        { route: 'register',      name: 'register',   moduleId: './register',       title: 'Zarejestruj' },
        { route: 'login',         name: 'login',      moduleId: './login',          title: 'Zaloguj' },
        { route: 'profile',       name: 'profile',    moduleId: './profile',        title: 'Profil', auth: true },
        { route: 'logout',        name: 'logout',     moduleId: './logout',         title: 'Logout', auth: true },
        { route: ':id', name: 'plan',    moduleId: './plan-creator',   title: 'Kreator planu' }
    ]);

    this.router = router;
  }

  getChosenGroups() {
    return filter(this.state.courses.byIDs, (course) => course.isGroupChosen)
      .map((course) => Object.assign({
        title: course.name
      }, find(course.groups.byIDs, (group) => group.isChosen)));
  }
}
