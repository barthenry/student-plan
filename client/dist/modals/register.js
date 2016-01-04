System.register(['aurelia-framework', 'aurelia-auth', './modal', 'aurelia-validation'], function (_export) {
    'use strict';

    var inject, customElement, bindable, AuthService, Modal, Validation, RegisterModal;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            customElement = _aureliaFramework.customElement;
            bindable = _aureliaFramework.bindable;
        }, function (_aureliaAuth) {
            AuthService = _aureliaAuth.AuthService;
        }, function (_modal) {
            Modal = _modal.Modal;
        }, function (_aureliaValidation) {
            Validation = _aureliaValidation.Validation;
        }],
        execute: function () {
            RegisterModal = (function (_Modal) {
                var _instanceInitializers = {};
                var _instanceInitializers = {};

                _inherits(RegisterModal, _Modal);

                _createDecoratedClass(RegisterModal, [{
                    key: 'data',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return null;
                    },
                    enumerable: true
                }], null, _instanceInitializers);

                function RegisterModal(auth, validation) {
                    var _this = this;

                    _classCallCheck(this, _RegisterModal);

                    _get(Object.getPrototypeOf(_RegisterModal.prototype), 'constructor', this).call(this);

                    _defineDecoratedPropertyDescriptor(this, 'data', _instanceInitializers);

                    this.email = "";
                    this.displayName = "";
                    this.password = "";
                    this.passwordConfirmation = "";
                    this.errorMessage = null;
                    this.auth = auth;
                    this.validation = validation.on(this).ensure('displayName').isNotEmpty().hasMinLength(3).ensure('email').isNotEmpty().isEmail().ensure('password').isNotEmpty().hasMinLength(8).ensure('passwordConfirmation', function (config) {
                        config.computedFrom(['password']);
                    }).isNotEmpty().isEqualTo(function () {
                        return _this.password;
                    }, 'wpisanym powyżej hasłem');
                }

                _createDecoratedClass(RegisterModal, [{
                    key: 'submit',
                    value: function submit() {
                        var _this2 = this;

                        this.validation.validate().then(function () {
                            var userInfo = { email: _this2.email, password: _this2.password, displayName: _this2.displayName };

                            return _this2.auth.signup(userInfo).then(function (response) {
                                console.log("Signed Up!");
                                _this2.closeModal();
                            })['catch'](function (error) {
                                console.log(error);
                                var jsonErrorResponse = JSON.parse(error.response);
                                _this2.errorMessage = jsonErrorResponse.message;
                                console.log(_this2.errorMessage);
                            });
                        })['catch'](function (validationError) {
                            console.log(validationError);
                        });
                    }
                }, {
                    key: 'attached',
                    value: function attached() {
                        this.attachToButton(this.data.triggerButtonId);
                    }
                }, {
                    key: 'reset',
                    value: function reset() {
                        this.email = '';
                        this.password = '';
                        this.passwordConfirmation = '';
                        this.displayName = '';
                        this.validation.clear();
                    }
                }], null, _instanceInitializers);

                var _RegisterModal = RegisterModal;
                RegisterModal = customElement('register-modal')(RegisterModal) || RegisterModal;
                RegisterModal = inject(AuthService, Validation)(RegisterModal) || RegisterModal;
                return RegisterModal;
            })(Modal);

            _export('RegisterModal', RegisterModal);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,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LDRCQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUN0Qiw0QkFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztxQkFFM0I7OztxQ0FqRVEsYUFBYTtBQUFiLDZCQUFhLEdBRHpCLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUNuQixhQUFhLEtBQWIsYUFBYTtBQUFiLDZCQUFhLEdBRnpCLE1BQU0sQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBRW5CLGFBQWEsS0FBYixhQUFhO3VCQUFiLGFBQWE7ZUFBUyxLQUFLIiwiZmlsZSI6Im1vZGFscy9yZWdpc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICdhdXJlbGlhLWF1dGgnO1xyXG5pbXBvcnQge01vZGFsfSBmcm9tICcuL21vZGFsJztcclxuaW1wb3J0IHsvKmVuc3VyZSwgKi9WYWxpZGF0aW9ufSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24nO1xyXG5cclxuQGluamVjdChBdXRoU2VydmljZSwgVmFsaWRhdGlvbilcclxuQGN1c3RvbUVsZW1lbnQoJ3JlZ2lzdGVyLW1vZGFsJylcclxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyTW9kYWwgZXh0ZW5kcyBNb2RhbHtcclxuICAgIEBiaW5kYWJsZSBkYXRhID0gbnVsbDtcclxuXHJcbiAgICAvL0BlbnN1cmUoZnVuY3Rpb24odmFsdWUpe3ZhbHVlLmlzTm90RW1wdHkoKX0pICAgIG1vem5hIHRleiB0YWtcclxuICAgIGVtYWlsID0gXCJcIjtcclxuXHJcbiAgICBkaXNwbGF5TmFtZSA9IFwiXCI7XHJcblxyXG4gICAgLy9AZW5zdXJlKGZ1bmN0aW9uKHZhbHVlKXt2YWx1ZS5pc05vdEVtcHR5KCkuaGFzTWluTGVuZ3RoKDgpfSlcclxuICAgIHBhc3N3b3JkID0gXCJcIjtcclxuXHJcbiAgICAvL0BlbnN1cmUoZnVuY3Rpb24odmFsdWUpe3ZhbHVlLmlzTm90RW1wdHkoKX0pXHJcbiAgICBwYXNzd29yZENvbmZpcm1hdGlvbiA9IFwiXCI7XHJcblxyXG4gICAgZXJyb3JNZXNzYWdlID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhdXRoLCB2YWxpZGF0aW9uKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYXV0aCA9IGF1dGg7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uID0gdmFsaWRhdGlvbi5vbih0aGlzKVxyXG4gICAgICAgICAgICAuZW5zdXJlKCdkaXNwbGF5TmFtZScpXHJcbiAgICAgICAgICAgICAgICAuaXNOb3RFbXB0eSgpXHJcbiAgICAgICAgICAgICAgICAuaGFzTWluTGVuZ3RoKDMpXHJcbiAgICAgICAgICAgIC5lbnN1cmUoJ2VtYWlsJylcclxuICAgICAgICAgICAgICAgIC5pc05vdEVtcHR5KClcclxuICAgICAgICAgICAgICAgIC5pc0VtYWlsKClcclxuICAgICAgICAgICAgLmVuc3VyZSgncGFzc3dvcmQnKVxyXG4gICAgICAgICAgICAgICAgLmlzTm90RW1wdHkoKVxyXG4gICAgICAgICAgICAgICAgLmhhc01pbkxlbmd0aCg4KVxyXG4gICAgICAgICAgICAuZW5zdXJlKCdwYXNzd29yZENvbmZpcm1hdGlvbicsIChjb25maWcpID0+IHtjb25maWcuY29tcHV0ZWRGcm9tKFsncGFzc3dvcmQnXSl9KVxyXG4gICAgICAgICAgICAgICAgLmlzTm90RW1wdHkoKVxyXG4gICAgICAgICAgICAgICAgLmlzRXF1YWxUbyggKCkgPT4ge3JldHVybiB0aGlzLnBhc3N3b3JkIH0sICd3cGlzYW55bSBwb3d5xbxlaiBoYXPFgmVtJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvbi52YWxpZGF0ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdXNlckluZm8gPSB7ZW1haWw6IHRoaXMuZW1haWwsIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLCBkaXNwbGF5TmFtZTogdGhpcy5kaXNwbGF5TmFtZX1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dGguc2lnbnVwKHVzZXJJbmZvKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTaWduZWQgVXAhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBqc29uRXJyb3JSZXNwb25zZSA9IEpTT04ucGFyc2UoZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0ganNvbkVycm9yUmVzcG9uc2UubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KS5jYXRjaCh2YWxpZGF0aW9uRXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWxpZGF0aW9uRXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaGVkKCl7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hUb0J1dHRvbih0aGlzLmRhdGEudHJpZ2dlckJ1dHRvbklkKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpe1xyXG4gICAgICAgIHRoaXMuZW1haWwgPSAnJztcclxuICAgICAgICB0aGlzLnBhc3N3b3JkID0gJyc7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZENvbmZpcm1hdGlvbiA9ICcnO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheU5hbWUgPSAnJztcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb24uY2xlYXIoKTtcclxuXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
