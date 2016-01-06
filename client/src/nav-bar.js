import {bindable, inject} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';

//import {AuthFilterValueConverter} from './authFilter';
//import {Router} from 'aurelia-router';
@inject(AuthService)
export class NavBar {
  _isAuthenticated = false;
  @bindable router = null;

  constructor(auth) {
    this.auth = auth;
  }

  attached() {
    this.auth.getMe().then(result => console.log(result)).catch(error => console.log(error));
  }

  get userName() {
    return this.auth.getMe();
  }

  //@computedFrom(this.auth)
  get isAuthenticated() {
    return this.auth.isAuthenticated();
  }
}
