System.register(['aurelia-framework', 'aurelia-auth', './models'], function (_export) {
    'use strict';

    var inject, FetchConfig, AuthorizeStep, Modal, App;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaAuth) {
            FetchConfig = _aureliaAuth.FetchConfig;
            AuthorizeStep = _aureliaAuth.AuthorizeStep;
        }, function (_models) {
            Modal = _models.Modal;
        }],
        execute: function () {
            App = (function () {
                function App(fetchConfig) {
                    _classCallCheck(this, _App);

                    this.loginModal = null;
                    this.registerModal = null;

                    this.fetchConfig = fetchConfig;
                    this.loginModal = new Modal();
                    this.registerModal = new Modal();

                    this.loginModal.setTitle("Logowanie").setTriggerButtonId("loginTriggerButton");

                    this.registerModal.setTitle("Rejestracja").setTriggerButtonId("registerTriggerButton");
                }

                _createClass(App, [{
                    key: 'activate',
                    value: function activate() {
                        this.fetchConfig.configure();
                    }
                }, {
                    key: 'configureRouter',
                    value: function configureRouter(config, router) {
                        config.title = 'Aurelia';
                        config.addPipelineStep('authorize', AuthorizeStep);

                        config.map([{ route: ['', 'creator'], name: 'creator', moduleId: './plan-creator', nav: false, title: 'Kreator planu' }, { route: 'add-group', name: 'add-group', moduleId: './add-group', nav: false, title: 'Dodaj grupę' }, { route: 'share', name: 'share', moduleId: './share', nav: false, title: 'Podziel się planem' }, { route: 'register', name: 'register', moduleId: './register', nav: false, title: 'Zarejestruj' }, { route: 'login', name: 'login', moduleId: './login', nav: false, title: 'Zaloguj' }, { route: 'profile', name: 'profile', moduleId: './profile', nav: false, title: 'Profil', auth: true }, { route: 'logout', name: 'logout', moduleId: './logout', nav: false, title: 'Logout', auth: true }]);

                        this.router = router;
                    }
                }]);

                var _App = App;
                App = inject(FetchConfig)(App) || App;
                return App;
            })();

            _export('App', App);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7bURBTWEsR0FBRzs7Ozs7Ozs7dUNBTlIsTUFBTTs7dUNBQ04sV0FBVzt5Q0FDWCxhQUFhOzs0QkFDYixLQUFLOzs7QUFHQSxlQUFHO0FBSUQseUJBSkYsR0FBRyxDQUlBLFdBQVcsRUFBQzs7O3lCQUh4QixVQUFVLEdBQUcsSUFBSTt5QkFDakIsYUFBYSxHQUFHLElBQUk7O0FBR2hCLHdCQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUMvQix3QkFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQzlCLHdCQUFJLENBQUMsYUFBYSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7O0FBRWpDLHdCQUFJLENBQUMsVUFBVSxDQUNWLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FDckIsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs7QUFFOUMsd0JBQUksQ0FBQyxhQUFhLENBQ2IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUN2QixrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2lCQUNwRDs7NkJBaEJRLEdBQUc7OzJCQWtCSixvQkFBRTtBQUNOLDRCQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO3FCQUNoQzs7OzJCQUVZLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDNUIsOEJBQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ3pCLDhCQUFNLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQzs7QUFFbkQsOEJBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDUCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFHLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsRUFDN0csRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUcsUUFBUSxFQUFFLGFBQWEsRUFBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsRUFDdEcsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFNLElBQUksRUFBRSxPQUFPLEVBQU8sUUFBUSxFQUFFLFNBQVMsRUFBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxFQUM3RyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUcsSUFBSSxFQUFFLFVBQVUsRUFBSSxRQUFRLEVBQUUsWUFBWSxFQUFJLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxFQUN0RyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQU0sSUFBSSxFQUFFLE9BQU8sRUFBTyxRQUFRLEVBQUUsU0FBUyxFQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUNsRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQU0sSUFBSSxFQUFFLFNBQVMsRUFBTyxRQUFRLEVBQUUsV0FBVyxFQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQ25ILEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBTSxJQUFJLEVBQUUsUUFBUSxFQUFPLFFBQVEsRUFBRSxVQUFVLEVBQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FDbkgsQ0FBQyxDQUFDOztBQUVILDRCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztxQkFDeEI7OzsyQkFyQ1UsR0FBRztBQUFILG1CQUFHLEdBRGYsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUNQLEdBQUcsS0FBSCxHQUFHO3VCQUFILEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7RmV0Y2hDb25maWd9IGZyb20gJ2F1cmVsaWEtYXV0aCc7XG5pbXBvcnQge0F1dGhvcml6ZVN0ZXB9IGZyb20gJ2F1cmVsaWEtYXV0aCc7XG5pbXBvcnQge01vZGFsfSBmcm9tICcuL21vZGVscyc7XG5cbkBpbmplY3QoRmV0Y2hDb25maWcpXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgICBsb2dpbk1vZGFsID0gbnVsbDtcbiAgICByZWdpc3Rlck1vZGFsID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKGZldGNoQ29uZmlnKXtcbiAgICAgICAgdGhpcy5mZXRjaENvbmZpZyA9IGZldGNoQ29uZmlnO1xuICAgICAgICB0aGlzLmxvZ2luTW9kYWwgPSBuZXcgTW9kYWwoKTtcbiAgICAgICAgdGhpcy5yZWdpc3Rlck1vZGFsID0gbmV3IE1vZGFsKCk7XG5cbiAgICAgICAgdGhpcy5sb2dpbk1vZGFsXG4gICAgICAgICAgICAuc2V0VGl0bGUoXCJMb2dvd2FuaWVcIilcbiAgICAgICAgICAgIC5zZXRUcmlnZ2VyQnV0dG9uSWQoXCJsb2dpblRyaWdnZXJCdXR0b25cIik7XG5cbiAgICAgICAgdGhpcy5yZWdpc3Rlck1vZGFsXG4gICAgICAgICAgICAuc2V0VGl0bGUoXCJSZWplc3RyYWNqYVwiKVxuICAgICAgICAgICAgLnNldFRyaWdnZXJCdXR0b25JZChcInJlZ2lzdGVyVHJpZ2dlckJ1dHRvblwiKTtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZSgpe1xuICAgICAgICB0aGlzLmZldGNoQ29uZmlnLmNvbmZpZ3VyZSgpO1xuICAgIH1cblxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpIHtcbiAgICAgIGNvbmZpZy50aXRsZSA9ICdBdXJlbGlhJztcbiAgICAgIGNvbmZpZy5hZGRQaXBlbGluZVN0ZXAoJ2F1dGhvcml6ZScsIEF1dGhvcml6ZVN0ZXApO1xuICAgICAgXG4gICAgICBjb25maWcubWFwKFtcbiAgICAgICAgICB7IHJvdXRlOiBbJycsICdjcmVhdG9yJ10sIG5hbWU6ICdjcmVhdG9yJywgIG1vZHVsZUlkOiAnLi9wbGFuLWNyZWF0b3InLCAgbmF2OiBmYWxzZSwgdGl0bGU6ICdLcmVhdG9yIHBsYW51JyB9LFxuICAgICAgICAgIHsgcm91dGU6ICdhZGQtZ3JvdXAnLCBuYW1lOiAnYWRkLWdyb3VwJywgIG1vZHVsZUlkOiAnLi9hZGQtZ3JvdXAnLCAgbmF2OiBmYWxzZSwgdGl0bGU6ICdEb2RhaiBncnVwxJknIH0sXG4gICAgICAgICAgeyByb3V0ZTogJ3NoYXJlJywgICAgIG5hbWU6ICdzaGFyZScsICAgICAgbW9kdWxlSWQ6ICcuL3NoYXJlJywgICAgICBuYXY6IGZhbHNlLCB0aXRsZTogJ1BvZHppZWwgc2nEmSBwbGFuZW0nIH0sXG4gICAgICAgICAgeyByb3V0ZTogJ3JlZ2lzdGVyJywgIG5hbWU6ICdyZWdpc3RlcicsICAgbW9kdWxlSWQ6ICcuL3JlZ2lzdGVyJywgICBuYXY6IGZhbHNlLCB0aXRsZTogJ1phcmVqZXN0cnVqJyB9LFxuICAgICAgICAgIHsgcm91dGU6ICdsb2dpbicsICAgICBuYW1lOiAnbG9naW4nLCAgICAgIG1vZHVsZUlkOiAnLi9sb2dpbicsICAgICAgbmF2OiBmYWxzZSwgdGl0bGU6ICdaYWxvZ3VqJyB9LFxuICAgICAgICAgIHsgcm91dGU6ICdwcm9maWxlJywgICAgIG5hbWU6ICdwcm9maWxlJywgICAgICBtb2R1bGVJZDogJy4vcHJvZmlsZScsICAgICAgbmF2OiBmYWxzZSwgdGl0bGU6ICdQcm9maWwnLCBhdXRoOiB0cnVlIH0sXG4gICAgICAgICAgeyByb3V0ZTogJ2xvZ291dCcsICAgICBuYW1lOiAnbG9nb3V0JywgICAgICBtb2R1bGVJZDogJy4vbG9nb3V0JywgICAgICBuYXY6IGZhbHNlLCB0aXRsZTogJ0xvZ291dCcsIGF1dGg6IHRydWUgfVxuICAgICAgXSk7XG5cbiAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
