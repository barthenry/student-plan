System.register(["aurelia-framework"], function (_export) {
    "use strict";

    var customElement, bindable, Modal;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_aureliaFramework) {
            customElement = _aureliaFramework.customElement;
            bindable = _aureliaFramework.bindable;
        }],
        execute: function () {
            Modal = (function () {
                function Modal() {
                    _classCallCheck(this, Modal);

                    this.$triggerButton = null;
                    this.showing = null;
                    this.error = null;
                }

                _createClass(Modal, [{
                    key: "attachToButton",
                    value: function attachToButton(triggerButtonId) {
                        var that = this;

                        console.log("attached");
                        this.$triggerButton = $("#" + triggerButtonId);

                        this.$triggerButton.click(function () {
                            that.showModal();
                        });
                    }
                }, {
                    key: "closeModal",
                    value: function closeModal() {
                        this.reset();
                        this.showing = false;
                    }
                }, {
                    key: "reset",
                    value: function reset() {}
                }, {
                    key: "showModal",
                    value: function showModal() {
                        this.showing = true;
                    }
                }]);

                return Modal;
            })();

            _export("Modal", Modal);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFscy9tb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7aUNBR2EsS0FBSzs7Ozs7Ozs7OENBSFYsYUFBYTt5Q0FBRSxRQUFROzs7QUFHbEIsaUJBQUs7eUJBQUwsS0FBSzswQ0FBTCxLQUFLOzt5QkFDZCxjQUFjLEdBQUcsSUFBSTt5QkFDckIsT0FBTyxHQUFHLElBQUk7eUJBQ2QsS0FBSyxHQUFHLElBQUk7Ozs2QkFISCxLQUFLOzsyQkFLQSx3QkFBQyxlQUFlLEVBQUM7QUFDM0IsNEJBQUksSUFBSSxHQUFHLElBQUksQ0FBQzs7QUFFaEIsK0JBQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDeEIsNEJBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBQyxlQUFlLENBQUMsQ0FBQzs7QUFFN0MsNEJBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFlBQVU7QUFDaEMsZ0NBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzt5QkFDcEIsQ0FBQyxDQUFDO3FCQUNOOzs7MkJBRVMsc0JBQUU7QUFDUiw0QkFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2IsNEJBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO3FCQUN4Qjs7OzJCQUVJLGlCQUFFLEVBQUU7OzsyQkFFQSxxQkFBRTtBQUNQLDRCQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztxQkFDdkI7Ozt1QkF6QlEsS0FBSyIsImZpbGUiOiJtb2RhbHMvbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGFse1xyXG4gICAgJHRyaWdnZXJCdXR0b24gPSBudWxsO1xyXG4gICAgc2hvd2luZyA9IG51bGw7XHJcbiAgICBlcnJvciA9IG51bGw7XHJcblxyXG4gICAgYXR0YWNoVG9CdXR0b24odHJpZ2dlckJ1dHRvbklkKXtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXR0YWNoZWRcIik7XHJcbiAgICAgICAgdGhpcy4kdHJpZ2dlckJ1dHRvbiA9ICQoXCIjXCIrdHJpZ2dlckJ1dHRvbklkKTtcclxuXHJcbiAgICAgICAgdGhpcy4kdHJpZ2dlckJ1dHRvbi5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGF0LnNob3dNb2RhbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTW9kYWwoKXtcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5zaG93aW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKXt9XHJcblxyXG4gICAgc2hvd01vZGFsKCl7XHJcbiAgICAgICAgdGhpcy5zaG93aW5nID0gdHJ1ZTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
