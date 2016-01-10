import { inject, bindable } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Course {
  @bindable course;

  constructor(events) {
    this.events = events;
  }

  selectCourse() {
    this.events.publish('dispatch', {
      type: 'SELECT_COURSE',
      id: this.course.id
    });
  }
}
