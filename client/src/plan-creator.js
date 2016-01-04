import moment from 'moment';
import fullCalendar from 'fullcalendar';
import $ from 'jquery';
$.fn.fullCalendar = fullCalendar.jquery.fn.fullCalendar;

export class PlanCreator {

    courses = [];

    constructor(){

        this.courses = [ // mozna to przerobic na jakies ladne modele
            {
                name: "Nazwa kursu 1",
                form: "Wykład",
                groups: [
                    {
                        id: "AKZ023231a",
                        teacher: "Jakiś Nauczyciel 1",
                        day: "czw",
                        time: "15:15",
                        place: "B-4 326",
                        isChosen: true// jeszcze musi dojsc cos mowiace, czy grupa ma byc wyszarzona (filtr)
                    },
                    {
                        id: "AKZ023231b",
                        teacher: "Jakiś Nauczyciel 1",
                        day: "pon",
                        time: "13:15",
                        place: "B-4 326",
                        isChosen: false
                    }
                ],
                isFilterEnabled: true,
                isGroupChosen: true
            },
            {
                name: "Nazwa kursu 1",
                form: "Seminarium",
                groups: [
                    {
                        id: "AKZ023232a",
                        teacher: "Jakiś Nauczyciel 2",
                        day: "czw",
                        time: "11:15",
                        place: "C-4 22",
                        isChosen: false
                    },
                    {
                        id: "AKZ023232b",
                        teacher: "Jakiś Nauczyciel 2",
                        day: "wt",
                        time: "11:15",
                        place: "B-1 26",
                        isChosen: false
                    },
                    {
                        id: "AKZ023232c",
                        teacher: "Jakiś Nauczyciel 2",
                        day: "pon",
                        time: "9:15",
                        place: "B-1 26",
                        isChosen: false
                    }
                ],
                isFilterEnabled: false,
                isGroupChosen: false
            }
        ]
    }

    attached(){
        
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

        $('.classes .list-group-item').on('dblclick', addRandomClass);
    }
}