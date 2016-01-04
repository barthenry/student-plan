import {customElement, bindable} from 'aurelia-framework';


export class Modal{
    $triggerButton = null;
    showing = null;
    error = null;

    attachToButton(triggerButtonId){
        var that = this;

        console.log("attached");
        this.$triggerButton = $("#"+triggerButtonId);

        this.$triggerButton.click(function(){
            that.showModal();
        });
    }

    closeModal(){
        this.reset();
        this.showing = false;
    }

    reset(){}

    showModal(){
        this.showing = true;
    }
}