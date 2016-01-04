System.register(['moment', 'fullcalendar', 'jquery'], function (_export) {
    'use strict';

    var moment, fullCalendar, $, PlanCreator;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_moment) {
            moment = _moment['default'];
        }, function (_fullcalendar) {
            fullCalendar = _fullcalendar['default'];
        }, function (_jquery) {
            $ = _jquery['default'];
        }],
        execute: function () {
            $.fn.fullCalendar = fullCalendar.jquery.fn.fullCalendar;

            PlanCreator = (function () {
                function PlanCreator() {
                    _classCallCheck(this, PlanCreator);

                    this.courses = [];

                    this.courses = [{
                        name: "Nazwa kursu 1",
                        form: "Wykład",
                        groups: [{
                            id: "AKZ023231a",
                            teacher: "Jakiś Nauczyciel 1",
                            day: "czw",
                            time: "15:15",
                            place: "B-4 326",
                            isChosen: true }, {
                            id: "AKZ023231b",
                            teacher: "Jakiś Nauczyciel 1",
                            day: "pon",
                            time: "13:15",
                            place: "B-4 326",
                            isChosen: false
                        }],
                        isFilterEnabled: true,
                        isGroupChosen: true
                    }, {
                        name: "Nazwa kursu 1",
                        form: "Seminarium",
                        groups: [{
                            id: "AKZ023232a",
                            teacher: "Jakiś Nauczyciel 2",
                            day: "czw",
                            time: "11:15",
                            place: "C-4 22",
                            isChosen: false
                        }, {
                            id: "AKZ023232b",
                            teacher: "Jakiś Nauczyciel 2",
                            day: "wt",
                            time: "11:15",
                            place: "B-1 26",
                            isChosen: false
                        }, {
                            id: "AKZ023232c",
                            teacher: "Jakiś Nauczyciel 2",
                            day: "pon",
                            time: "9:15",
                            place: "B-1 26",
                            isChosen: false
                        }],
                        isFilterEnabled: false,
                        isGroupChosen: false
                    }];
                }

                _createClass(PlanCreator, [{
                    key: 'attached',
                    value: function attached() {

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

                        var randomInRange = function randomInRange(from, to) {
                            return Math.floor(Math.random() * to) + from;
                        };

                        var addRandomClass = (function () {
                            var classNumber = 0;

                            return function () {
                                var start = monday.clone().add({ days: randomInRange(0, 5), hours: randomInRange(6, 14) });

                                $('#calendar').fullCalendar('renderEvent', {
                                    title: 'Zajęcia ' + ++classNumber,
                                    start: start,
                                    end: start.clone().add({ hours: 1, minutes: 30 })
                                });
                            };
                        })();

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
                }]);

                return PlanCreator;
            })();

            _export('PlanCreator', PlanCreator);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,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QyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBRXpCLDZCQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDN0MsNkJBQUMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3lCQUN6QyxDQUFDLENBQUM7O0FBRUgseUJBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVk7QUFDbkMsZ0NBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBRXBDLDZCQUFDLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO3lCQUMzQixDQUFDLENBQUM7O0FBRUgseUJBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7cUJBQ2pFOzs7dUJBcklRLFdBQVciLCJmaWxlIjoicGxhbi1jcmVhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgZnVsbENhbGVuZGFyIGZyb20gJ2Z1bGxjYWxlbmRhcic7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbiQuZm4uZnVsbENhbGVuZGFyID0gZnVsbENhbGVuZGFyLmpxdWVyeS5mbi5mdWxsQ2FsZW5kYXI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxhbkNyZWF0b3Ige1xyXG5cclxuICAgIGNvdXJzZXMgPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgICAgICB0aGlzLmNvdXJzZXMgPSBbIC8vIG1vem5hIHRvIHByemVyb2JpYyBuYSBqYWtpZXMgbGFkbmUgbW9kZWxlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTmF6d2Ega3Vyc3UgMVwiLFxyXG4gICAgICAgICAgICAgICAgZm9ybTogXCJXeWvFgmFkXCIsXHJcbiAgICAgICAgICAgICAgICBncm91cHM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIkFLWjAyMzIzMWFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhY2hlcjogXCJKYWtpxZsgTmF1Y3p5Y2llbCAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheTogXCJjendcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogXCIxNToxNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZTogXCJCLTQgMzI2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2hvc2VuOiB0cnVlLy8gamVzemN6ZSBtdXNpIGRvanNjIGNvcyBtb3dpYWNlLCBjenkgZ3J1cGEgbWEgYnljIHd5c3phcnpvbmEgKGZpbHRyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJBS1owMjMyMzFiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYWNoZXI6IFwiSmFracWbIE5hdWN6eWNpZWwgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXk6IFwicG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IFwiMTM6MTVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2U6IFwiQi00IDMyNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Nob3NlbjogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaXNGaWx0ZXJFbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXNHcm91cENob3NlbjogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIk5hendhIGt1cnN1IDFcIixcclxuICAgICAgICAgICAgICAgIGZvcm06IFwiU2VtaW5hcml1bVwiLFxyXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJBS1owMjMyMzJhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYWNoZXI6IFwiSmFracWbIE5hdWN6eWNpZWwgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXk6IFwiY3p3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IFwiMTE6MTVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2U6IFwiQy00IDIyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2hvc2VuOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJBS1owMjMyMzJiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYWNoZXI6IFwiSmFracWbIE5hdWN6eWNpZWwgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXk6IFwid3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogXCIxMToxNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZTogXCJCLTEgMjZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNDaG9zZW46IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIkFLWjAyMzIzMmNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhY2hlcjogXCJKYWtpxZsgTmF1Y3p5Y2llbCAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheTogXCJwb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogXCI5OjE1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlOiBcIkItMSAyNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Nob3NlbjogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaXNGaWx0ZXJFbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzR3JvdXBDaG9zZW46IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoZWQoKXtcclxuICAgICAgICBcclxuICAgICAgICAkKCcjY2FsZW5kYXInKS5mdWxsQ2FsZW5kYXIoe1xyXG4gICAgICAgICAgICBkZWZhdWx0VmlldzogXCJhZ2VuZGFXZWVrXCIsXHJcbiAgICAgICAgICAgIGFsbERheVNsb3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBzbG90RHVyYXRpb246IFwiMDA6MzA6MDBcIixcclxuICAgICAgICAgICAgdGl0bGVGb3JtYXQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGNvbHVtbkZvcm1hdDogXCJkZGRkXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIG1pblRpbWU6ICcwNjowMDowMCcsXHJcbiAgICAgICAgICAgIG1heFRpbWU6ICcyMTowMDowMCcsXHJcbiAgICAgICAgICAgIGhlaWdodDogNjgyLFxyXG4gICAgICAgICAgICBsYW5nOiBcInBsXCIsXHJcbiAgICAgICAgICAgIHNsb3RMYWJlbEludGVydmFsOiBcIjAxOjAwOjAwXCIsXHJcbiAgICAgICAgICAgIHNsb3RMYWJlbEZvcm1hdDogXCJIOm1tXCIsXHJcbiAgICAgICAgICAgIGhpZGRlbkRheXM6IFs2LCAwXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgbW9uZGF5ID0gbW9tZW50KCkuc3RhcnRPZignd2VlaycpO1xyXG5cclxuICAgICAgICB2YXIgcmFuZG9tSW5SYW5nZSA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdG8pICsgZnJvbTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgYWRkUmFuZG9tQ2xhc3MgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY2xhc3NOdW1iZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IG1vbmRheS5jbG9uZSgpLmFkZCh7ZGF5czogcmFuZG9tSW5SYW5nZSgwLCA1KSwgaG91cnM6IHJhbmRvbUluUmFuZ2UoNiwgMTQpfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnI2NhbGVuZGFyJykuZnVsbENhbGVuZGFyKCdyZW5kZXJFdmVudCcsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1phasSZY2lhICcgKyArK2NsYXNzTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBzdGFydCxcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6IHN0YXJ0LmNsb25lKCkuYWRkKHtob3VyczogMSwgbWludXRlczogMzB9KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSkoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAvKiQoJ2lucHV0JykuaUNoZWNrKHtcclxuICAgICAgICAgY2hlY2tib3hDbGFzczogJ2ljaGVja2JveF9mbGF0JyxcclxuICAgICAgICAgcmFkaW9DbGFzczogJ2lyYWRpb19mbGF0J1xyXG4gICAgICAgICB9KTsqL1xyXG5cclxuICAgICAgICAkKCdhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5jb3Vyc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9ICR0aGlzLmRhdGEoJ3RhcmdldCcpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmNvdXJzZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmNsYXNzZXMgLmxpc3QtZ3JvdXAnKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICQoJyMnICsgdGFyZ2V0KS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5uYXYtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcykuZGF0YSgndGFyZ2V0Jyk7XHJcblxyXG4gICAgICAgICAgICAkKCcjJyArIHRhcmdldCkubW9kYWwoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLmNsYXNzZXMgLmxpc3QtZ3JvdXAtaXRlbScpLm9uKCdkYmxjbGljaycsIGFkZFJhbmRvbUNsYXNzKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
