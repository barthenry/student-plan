import {inject} from 'aurelia-framework';
import moment from 'moment';
import $ from 'jquery';
import fullCalendar from 'fullcalendar';

@inject(Element)
export class Calendar {

	constructor(element) {
    this.element = element;
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
      hiddenDays: [6, 0]
    });

    this.fullCalendar.render();
  }
}
