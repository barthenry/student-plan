import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import moment from 'moment';
import $ from 'jquery';
import fullCalendar from 'fullcalendar';

@inject(Element, EventAggregator)
export class Calendar {
  static shortDayNamesMap = {
    pn: 1,
    wt: 2,
    'śr': 3,
    cz: 4,
    pt: 5
  };

  static shortFormsNames = {
    Seminarium: 'S',
    'Wykład': 'W',
    'Zajęcia laboratoryjne': 'L',
    'Ćwiczenia': 'Ć',
    Projekt: 'P'
  };

  static eventFormsMap = {
    S: 'seminar',
    W: 'lecture',
    L: 'laboratory',
    'Ć': 'class',
    P: 'project'
  };

	constructor(element, events) {
    this.element = element;
    this.events = events;
	}

  attached() {
    const calendar = $(this.element).find('#calendar');

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
      dayNames: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
      eventRender: this.renderEvent.bind(this)
    });

    this.fullCalendar.render();

    calendar.on('click', '.fc-remove-event', this.handleRemoveEvent.bind(this));

    this.events.subscribe('fc.events', (courses) => {
      this.fullCalendar.removeEvents();
      this.fullCalendar.addEventSource(this.mapCoursesToEvents(courses));
    });

    this.events.publish('dispatch', {
      action: 'type'
    });
  }

  mapCoursesToEvents(courses) {
    return courses.map((course) => {
      const start = moment().startOf('week').add({
        days: Calendar.shortDayNamesMap[course.day],
        hours: course.time.split(':')[0],
        minutes: course.time.split(':')[1]
      });

      return {
        ...course,
        title: course.title.split(' ').map((s) => s[0].toUpperCase()).join(''),
        start,
        end: start.clone().add({
          hours: 1,
          minutes: 30
        })
      };
    });
  }

  renderEvent(event, element) {
    return element
        .addClass(`fc-${event.occurance}-event`)
        .find('.fc-content')
          .append(`<span class="fc-content-line">${event.place}</span>`)
          .append(`<span class="fc-content-line">${event.teacher.split(' ').filter((s, i, arr) => i === 0 || i === arr.length - 1).join(' ')}</span>`)
          .end()
        .find('.fc-bg')
          .addClass(`fc-${Calendar.eventFormsMap[Calendar.shortFormsNames[event.form]]}`)
          .end()
        .append(`<a class="fc-remove-event" href="#" data-event-id=${event.id}><span class="fc-icon-close"></span><a/>`)
        .append(`<span class="fc-form-indicator">${Calendar.shortFormsNames[event.form]}</span>`);
  }

  handleRemoveEvent(event) {
    this.events.publish('dispatch', {
      type: 'UNSELECT_GROUP',
      id: $(event.currentTarget).data('eventId')
    });
  }
}
