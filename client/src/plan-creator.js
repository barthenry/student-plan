import { bindable } from 'aurelia-framework';
import { Container, inject } from 'aurelia-dependency-injection';
import { HttpClient } from 'aurelia-fetch-client';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(Container, HttpClient, EventAggregator)
export class PlanCreator {

    constructor(container, http, events) {
        console.log("się dzieje 1");
        //this.courses = container.parent.viewModel.state.courses;
        console.log("się dzieje 2");
        http.configure(config => {
            config
              .withBaseUrl('http://localhost:5000/');
        });

        this.container = container;
        this.http = http;
        this.events = events;
    }

    activate(params){
        console.log("ID planu:", params.id);
        if(params.id != null){
            this.getPlan(params.id);
        }
    }

    getPlan(id){
        this.http.fetch('plan/get/'+id)
        .then(response => response.json())
        .then(data => {
            console.log("POBRANY PLAN: ", data);
            this.events.publish('dispatch', {
                type: 'SET_PLAN',
                courses: data.courses
            });

            //this.courses = data.courses;
        });
    }
}
