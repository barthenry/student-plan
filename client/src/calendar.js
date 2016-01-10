import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import moment from 'moment';
import $ from 'jquery';
import fullCalendar from 'fullcalendar';

@inject(Element, EventAggregator)
export class Calendar {
	constructor(element, events) {
    this.element = element;
    this.events = events;

    this.monday = moment().startOf('week');
    this.shortNamesMap = {
      pon: 1,
      wt: 2,
      sr: 3,
      czw: 4,
      pt: 5
    };
	}

  attached() {
    const calendar = this.element.querySelectorAll('#calendar');

    this.fullCalendar = new fullCalendar.Calendar($(calendar), {
      defaultView: 'agendaWeek',
      allDaySlot: false,
      slotDuration: '00:30:00',
      titleFormat: '',
      columnFormat: 'dddd',
      header: false,
      minTime: '06:00:00',
      maxTime: '21:00:00',
      height: 682,
      lang: 'pl',
      slotLabelInterval: '01:00:00',
      slotLabelFormat: 'H:mm',
      timeFormat: 'H:mm',
      hiddenDays: [6, 0],
      dayNames: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota']
    });

    this.fullCalendar.render();

    this.events.subscribe('fc.events', (courses) => {
      this.fullCalendar.removeEvents();
      this.fullCalendar.addEventSource(this.mapCoursesToEvents(courses));
    });
  }

  mapCoursesToEvents(courses) {
    return courses.map((course) => ({
      title: course.id,
      start: this.monday.clone().add({
        days: this.shortNamesMap[course.day],
        hours: course.time.split(':')[0],
        minutes: course.time.split(':')[1]
      })
    }));
  }
}
