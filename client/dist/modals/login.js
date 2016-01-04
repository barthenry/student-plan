System.register(['aurelia-framework', 'aurelia-auth', './modal', 'aurelia-validation'], function (_export) {
    'use strict';

    var inject, customElement, bindable, AuthService, Modal, Validation, LoginModal;

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
            LoginModal = (function (_Modal) {
                var _instanceInitializers = {};
                var _instanceInitializers = {};

                _inherits(LoginModal, _Modal);

                _createDecoratedClass(LoginModal, [{
                    key: 'data',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return null;
                    },
                    enumerable: true
                }], null, _instanceInitializers);

                function LoginModal(auth, validation) {
                    _classCallCheck(this, _LoginModal);

                    _get(Object.getPrototypeOf(_LoginModal.prototype), 'constructor', this).call(this);

                    _defineDecoratedPropertyDescriptor(this, 'data', _instanceInitializers);

                    this.email = "admin";
                    this.password = "password";
                    this.auth = auth;
                    this.validation = validation.on(this).ensure('email').isNotEmpty().isEmail().ensure('password').isNotEmpty().hasMinLength(8);
                }

                _createDecoratedClass(LoginModal, [{
                    key: 'attached',
                    value: function attached() {
                        this.attachToButton(this.data.triggerButtonId);
                    }
                }, {
                    key: 'submit',
                    value: function submit() {
                        var _this = this;

                        this.validation.validate().then(function () {
                            return _this.auth.login(_this.email, _this.password).then(function (response) {
                                console.log("Login response: ", response);
                                _this.closeModal();
                            })['catch'](function (error) {
                                console.log(error);
                                var jsonErrorResponse = JSON.parse(error.response);
                                _this.errorMessage = jsonErrorResponse.message;
                                console.log(_this.errorMessage);
                            });
                        })['catch'](function (validationError) {
                            console.log(validationError);
                        });
                    }
                }, {
                    key: 'reset',
                    value: function reset() {
                        this.email = '';
                        this.password = '';
                        this.validation.clear();
                    }
                }], null, _instanceInitializers);

                var _LoginModal = LoginModal;
                LoginModal = customElement('login-modal')(LoginModal) || LoginModal;
                LoginModal = inject(AuthService, Validation)(LoginModal) || LoginModal;
                return LoginModal;
            })(Modal);

            _export('LoginModal', LoginModal);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFscy9sb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7eUVBT2EsVUFBVTs7Ozs7Ozs7Ozs7Ozs7dUNBUGYsTUFBTTs4Q0FBRSxhQUFhO3lDQUFFLFFBQVE7O3VDQUMvQixXQUFXOzsyQkFDWCxLQUFLOzs0Q0FDTCxVQUFVOzs7QUFJTCxzQkFBVTs7OzswQkFBVixVQUFVOztzQ0FBVixVQUFVOztpQ0FDbEIsUUFBUTs7K0JBQVEsSUFBSTs7Ozs7QUFJVix5QkFMRixVQUFVLENBS1AsSUFBSSxFQUFFLFVBQVUsRUFBQzs7O0FBQ3pCLHVHQUFROzs7O3lCQUpaLEtBQUssR0FBRyxPQUFPO3lCQUNmLFFBQVEsR0FBRyxVQUFVO0FBSWpCLHdCQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQix3QkFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUNoQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQ2YsVUFBVSxFQUFFLENBQ1osT0FBTyxFQUFFLENBQ1QsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNsQixVQUFVLEVBQUUsQ0FDWixZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3hCOztzQ0FmUSxVQUFVOzsyQkFnQlgsb0JBQUU7QUFDTiw0QkFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO3FCQUNsRDs7OzJCQUVLLGtCQUFFOzs7QUFDSiw0QkFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBTTtBQUNsQyxtQ0FBTyxNQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBSyxLQUFLLEVBQUUsTUFBSyxRQUFRLENBQUMsQ0FDNUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ2QsdUNBQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDMUMsc0NBQUssVUFBVSxFQUFFLENBQUM7NkJBQ3JCLENBQUMsU0FDSSxDQUFDLFVBQUEsS0FBSyxFQUFJO0FBQ1osdUNBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkIsb0NBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbkQsc0NBQUssWUFBWSxHQUFHLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztBQUM5Qyx1Q0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFLLFlBQVksQ0FBQyxDQUFDOzZCQUNsQyxDQUFDLENBQUM7eUJBQ1YsQ0FBQyxTQUFNLENBQUMsVUFBQSxlQUFlLEVBQUk7QUFDeEIsbUNBQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7eUJBQ2hDLENBQUMsQ0FBQztxQkFDTjs7OzJCQUVJLGlCQUFFO0FBQ0gsNEJBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLDRCQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNuQiw0QkFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztxQkFFM0I7OztrQ0EzQ1EsVUFBVTtBQUFWLDBCQUFVLEdBRHRCLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FDaEIsVUFBVSxLQUFWLFVBQVU7QUFBViwwQkFBVSxHQUZ0QixNQUFNLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUVuQixVQUFVLEtBQVYsVUFBVTt1QkFBVixVQUFVO2VBQVMsS0FBSyIsImZpbGUiOiJtb2RhbHMvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgY3VzdG9tRWxlbWVudCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnYXVyZWxpYS1hdXRoJztcclxuaW1wb3J0IHtNb2RhbH0gZnJvbSAnLi9tb2RhbCc7XHJcbmltcG9ydCB7VmFsaWRhdGlvbn0gZnJvbSAnYXVyZWxpYS12YWxpZGF0aW9uJztcclxuXHJcbkBpbmplY3QoQXV0aFNlcnZpY2UsIFZhbGlkYXRpb24pXHJcbkBjdXN0b21FbGVtZW50KCdsb2dpbi1tb2RhbCcpXHJcbmV4cG9ydCBjbGFzcyBMb2dpbk1vZGFsIGV4dGVuZHMgTW9kYWx7XHJcbiAgICBAYmluZGFibGUgZGF0YSA9IG51bGw7XHJcbiAgICBlbWFpbCA9IFwiYWRtaW5cIjtcclxuICAgIHBhc3N3b3JkID0gXCJwYXNzd29yZFwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGF1dGgsIHZhbGlkYXRpb24pe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5hdXRoID0gYXV0aDtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb24gPSB2YWxpZGF0aW9uLm9uKHRoaXMpXHJcbiAgICAgICAgICAgIC5lbnN1cmUoJ2VtYWlsJylcclxuICAgICAgICAgICAgLmlzTm90RW1wdHkoKVxyXG4gICAgICAgICAgICAuaXNFbWFpbCgpXHJcbiAgICAgICAgICAgIC5lbnN1cmUoJ3Bhc3N3b3JkJylcclxuICAgICAgICAgICAgLmlzTm90RW1wdHkoKVxyXG4gICAgICAgICAgICAuaGFzTWluTGVuZ3RoKDgpO1xyXG4gICAgfVxyXG4gICAgYXR0YWNoZWQoKXtcclxuICAgICAgICB0aGlzLmF0dGFjaFRvQnV0dG9uKHRoaXMuZGF0YS50cmlnZ2VyQnV0dG9uSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdCgpe1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvbi52YWxpZGF0ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRoLmxvZ2luKHRoaXMuZW1haWwsIHRoaXMucGFzc3dvcmQpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiByZXNwb25zZTogXCIsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIganNvbkVycm9yUmVzcG9uc2UgPSBKU09OLnBhcnNlKGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGpzb25FcnJvclJlc3BvbnNlLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5lcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkuY2F0Y2godmFsaWRhdGlvbkVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmFsaWRhdGlvbkVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVzZXQoKXtcclxuICAgICAgICB0aGlzLmVtYWlsID0gJyc7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9ICcnO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvbi5jbGVhcigpO1xyXG5cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
