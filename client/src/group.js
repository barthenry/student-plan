import { inject, bindable } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Group {
  @bindable group;

  constructor(events) {
    this.events = events;
  }

  selectGroup() {
    this.events.publish('dispatch', {
      type: 'SELECT_GROUP',
      id: this.group.id
    });
  }
}
