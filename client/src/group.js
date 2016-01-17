import { inject, bindable } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Group {
  @bindable group;

  constructor(events) {
    this.events = events;
  }

  clickGroup() {
    if (this.group.isChosen) {
      return this.events.publish('dispatch', {
        type: 'UNSELECT_GROUP',
        id: this.group.id
      });
    }

    this.events.publish('dispatch', {
      type: 'SELECT_GROUP',
      id: this.group.id
    });
  }
}
