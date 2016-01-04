System.register([], function (_export) {
    'use strict';

    var Modal;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            Modal = (function () {
                function Modal() {
                    _classCallCheck(this, Modal);

                    this.title = null;
                    this.contentView = null;
                    this.triggerButtonId = null;
                    this.formId = null;
                    this.buttons = [];
                }

                _createClass(Modal, [{
                    key: 'setTitle',
                    value: function setTitle(title) {
                        this.title = title;
                        return this;
                    }
                }, {
                    key: 'setContentView',
                    value: function setContentView(contentView) {
                        this.contentView = contentView;
                        return this;
                    }
                }, {
                    key: 'setTriggerButtonId',
                    value: function setTriggerButtonId(buttonId) {
                        this.triggerButtonId = buttonId;
                        return this;
                    }
                }, {
                    key: 'setFormId',
                    value: function setFormId(formId) {
                        this.formId = formId;
                        return this;
                    }
                }, {
                    key: 'addButton',
                    value: function addButton(text, id, classes) {
                        var role = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];

                        this.buttons.push({
                            text: text,
                            id: id,
                            classes: classes,
                            role: role
                        });

                        return this;
                    }
                }]);

                return Modal;
            })();

            _export('Modal', Modal);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFBYSxLQUFLOzs7Ozs7Ozs7QUFBTCxpQkFBSzt5QkFBTCxLQUFLOzBDQUFMLEtBQUs7O3lCQUNkLEtBQUssR0FBRyxJQUFJO3lCQUNaLFdBQVcsR0FBRyxJQUFJO3lCQUNsQixlQUFlLEdBQUcsSUFBSTt5QkFDdEIsTUFBTSxHQUFHLElBQUk7eUJBQ2IsT0FBTyxHQUFHLEVBQUU7Ozs2QkFMSCxLQUFLOzsyQkFPTixrQkFBQyxLQUFLLEVBQUM7QUFDWCw0QkFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsK0JBQU8sSUFBSSxDQUFDO3FCQUNmOzs7MkJBRWEsd0JBQUMsV0FBVyxFQUFDO0FBQ3ZCLDRCQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUMvQiwrQkFBTyxJQUFJLENBQUM7cUJBQ2Y7OzsyQkFFaUIsNEJBQUMsUUFBUSxFQUFDO0FBQ3hCLDRCQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztBQUNoQywrQkFBTyxJQUFJLENBQUM7cUJBQ2Y7OzsyQkFFUSxtQkFBQyxNQUFNLEVBQUM7QUFDYiw0QkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsK0JBQU8sSUFBSSxDQUFDO3FCQUNmOzs7MkJBRVEsbUJBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQVk7NEJBQVYsSUFBSSx5REFBRyxFQUFFOztBQUNsQyw0QkFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7QUFDZCxnQ0FBSSxFQUFFLElBQUk7QUFDViw4QkFBRSxFQUFFLEVBQUU7QUFDTixtQ0FBTyxFQUFFLE9BQU87QUFDaEIsZ0NBQUksRUFBRSxJQUFJO3lCQUNiLENBQUMsQ0FBQzs7QUFFSCwrQkFBTyxJQUFJLENBQUM7cUJBQ2Y7Ozt1QkFwQ1EsS0FBSyIsImZpbGUiOiJtb2RlbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTW9kYWx7XHJcbiAgICB0aXRsZSA9IG51bGw7XHJcbiAgICBjb250ZW50VmlldyA9IG51bGw7XHJcbiAgICB0cmlnZ2VyQnV0dG9uSWQgPSBudWxsO1xyXG4gICAgZm9ybUlkID0gbnVsbDtcclxuICAgIGJ1dHRvbnMgPSBbXTtcclxuXHJcbiAgICBzZXRUaXRsZSh0aXRsZSl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbnRlbnRWaWV3KGNvbnRlbnRWaWV3KXtcclxuICAgICAgICB0aGlzLmNvbnRlbnRWaWV3ID0gY29udGVudFZpZXc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VHJpZ2dlckJ1dHRvbklkKGJ1dHRvbklkKXtcclxuICAgICAgICB0aGlzLnRyaWdnZXJCdXR0b25JZCA9IGJ1dHRvbklkO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZvcm1JZChmb3JtSWQpe1xyXG4gICAgICAgIHRoaXMuZm9ybUlkID0gZm9ybUlkO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEJ1dHRvbih0ZXh0LCBpZCwgY2xhc3Nlcywgcm9sZSA9ICcnKXtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMucHVzaCh7XHJcbiAgICAgICAgICAgIHRleHQ6IHRleHQsXHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgY2xhc3NlczogY2xhc3NlcyxcclxuICAgICAgICAgICAgcm9sZTogcm9sZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
