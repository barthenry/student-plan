import {inject, customElement, bindable} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';
import {Modal} from './modal';
import {/*ensure, */Validation} from 'aurelia-validation';

@inject(AuthService, Validation)
@customElement('register-modal')
export class RegisterModal extends Modal{
    @bindable data = null;

    //@ensure(function(value){value.isNotEmpty()})    mozna tez tak
    email = "";

    displayName = "";

    //@ensure(function(value){value.isNotEmpty().hasMinLength(8)})
    password = "";

    //@ensure(function(value){value.isNotEmpty()})
    passwordConfirmation = "";

    errorMessage = null;

    constructor(auth, validation){
        super();
        this.auth = auth;
        this.validation = validation.on(this)
            .ensure('displayName')
                .isNotEmpty()
                .hasMinLength(3)
            .ensure('email')
                .isNotEmpty()
                .isEmail()
            .ensure('password')
                .isNotEmpty()
                .hasMinLength(8)
            .ensure('passwordConfirmation', (config) => {config.computedFrom(['password'])})
                .isNotEmpty()
                .isEqualTo( () => {return this.password }, 'wpisanym powyżej hasłem');
    }

    submit() {
        this.validation.validate().then(() => {
            var userInfo = {email: this.email, password: this.password, displayName: this.displayName}

            return this.auth.signup(userInfo)
                .then((response) => {
                    console.log("Signed Up!");
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
    }

    attached(){
        this.attachToButton(this.data.triggerButtonId);
    }

    reset(){
        this.email = '';
        this.password = '';
        this.passwordConfirmation = '';
        this.displayName = '';
        this.validation.clear();
        this.errorMessage = "";
    }
}