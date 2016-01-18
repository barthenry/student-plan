import { bindable } from 'aurelia-framework';
import { Container, inject } from 'aurelia-dependency-injection';
import { HttpClient } from 'aurelia-fetch-client';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(Container, HttpClient, EventAggregator)
export class PlanCreator {
  @bindable courses;

  constructor(container, http, events) {
    this.courses = container.parent.viewModel.state.courses;

    http.configure(config => {
      config
        .withBaseUrl('http://localhost:5000/');
    });

    this.container = container;
    this.http = http;
    this.events = events;
  }

  activate(params) {
    if (!params.id) {
      return;
    }

    this.getPlan(params.id);
  }

  getPlan(id) {
    this.http.fetch(`plan/get/${id}`)
    .then(response => response.json())
    .then(data => {
      this.events.publish('dispatch', {
        type: 'SET_PLAN',
        data
      });
    });
  }
}
