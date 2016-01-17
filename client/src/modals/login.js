import {inject, customElement, bindable} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';
import {Modal} from './modal';
import {Validation} from 'aurelia-validation';

@inject(AuthService, Validation)
@customElement('login-modal')
export class LoginModal extends Modal{
    @bindable data = null;
    email = "admin";
    password = "password";

    constructor(auth, validation){
        super();
        this.auth = auth;
        this.validation = validation.on(this)
            .ensure('email')
            .isNotEmpty()
            .isEmail()
            .ensure('password')
            .isNotEmpty()
            .hasMinLength(8);
    }
    attached(){
        this.attachToButton(this.data.triggerButtonId);
    }

    submit(){
        this.validation.validate().then(() => {
            return this.auth.login(this.email, this.password)
                .then(response => {
                    console.log("Login response: ", response);
                    this.closeModal();
                })
                .catch(error => {
                    console.log(error);
                    var jsonErrorResponse = JSON.parse(error.response);
                    this.errorMessage = jsonErrorResponse.message;
                    console.log(this.errorMessage);
                });
        }).catch(validationError => {
            console.log(validationError);
        });
    };

    reset(){
        this.email = '';
        this.password = '';
        this.validation.clear();
        this.errorMessage = "";
    }
}