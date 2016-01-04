import moment from 'moment';
import {fullCalendar, pl} from 'fullcalendar';
import $ from 'jquery';
$.fn.fullCalendar = fullCalendar.jquery.fn.fullCalendar;

$(document).ready(function() {
	var monday = moment().startOf('week');

	var randomInRange = function (from, to) {
		return Math.floor(Math.random() * to) + from;
	};

	var addRandomClass = (function () {
		var classNumber = 0;

		return function () {
			var start = monday.clone().add({days: randomInRange(0, 5), hours: randomInRange(6, 14)});

			$('#calendar').fullCalendar('renderEvent', {
				title: 'Zajęcia ' + ++classNumber,
				start: start,
				end: start.clone().add({hours: 1, minutes: 30})
			});
		};
	})();

	$('#calendar').fullCalendar({
		defaultView: "agendaWeek",
		allDaySlot: false,
		slotDuration: "00:30:00",
		titleFormat: "",
		columnFormat: "dddd",
		header: false,
		minTime: '06:00:00',
		maxTime: '21:00:00',
		height: 682,
		lang: "pl",
		slotLabelInterval: "01:00:00",
		slotLabelFormat: "H:mm",
		hiddenDays: [6, 0]
	});

	/*$('input').iCheck({
		checkboxClass: 'icheckbox_flat',
		radioClass: 'iradio_flat'
	});*/

	$('a').on('click', function (event) {
		event.preventDefault();
	});

	$('.course').on('click', function (event) {
		var $this = $(this);
		var target = $this.data('target');

		$('.course').removeClass('active');
		$this.addClass('active');

		$('.classes .list-group').addClass('hidden');
		$('#' + target).removeClass('hidden');
	});

	$('.nav-link').on('click', function () {
		var target = $(this).data('target');

		$('#' + target).modal();
	});

	$('.classes .list-group-item').on('click', addRandomClass);
});
