import {AuthService} from 'aurelia-auth';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(AuthService, Router)

export class Logout{
    constructor(authService, router){
        this.authService = authService;
        console.log('logout constructor');
        this.router = router;
    };

    activate(){
        console.log('logout');
        this.authService.logout('#/')
            .then(response=>{
                console.log("ok logged out on  logout.js");
                //this.router.navigate("creator");
            })
            .catch(err=>{
                console.log("error logged out  logout.js");

            });
        this.deactivate(); // mindfuck #1, bez tego wylogowanie po raz trzeci nie dziala O_o
    }
}