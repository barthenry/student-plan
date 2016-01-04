System.register(['bootstrap', 'auth-config.js'], function (_export) {
  'use strict';

  var authConfig;

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging().plugin('aurelia-bs-modal').plugin('aurelia-validation', function (config) {
      config.useLocale('pl-PL');
    }).plugin('aurelia-auth', function (baseConfig) {
      baseConfig.configure(authConfig);
    });

    aurelia.start().then(function (a) {
      return a.setRoot();
    });
  }

  return {
    setters: [function (_bootstrap) {}, function (_authConfigJs) {
      authConfig = _authConfigJs['default'];
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdPLFdBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRTtBQUNqQyxXQUFPLENBQUMsR0FBRyxDQUNOLHFCQUFxQixFQUFFLENBQ3ZCLGtCQUFrQixFQUFFLENBQ3BCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUMxQixNQUFNLENBQUMsb0JBQW9CLEVBQUUsVUFBQyxNQUFNLEVBQUs7QUFBRSxZQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0tBQUUsQ0FBQyxDQUN2RSxNQUFNLENBQUMsY0FBYyxFQUFFLFVBQUMsVUFBVSxFQUFHO0FBQ3BDLGdCQUFVLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0tBQ2pDLENBQUMsQ0FBQzs7QUFVUCxXQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQzthQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7S0FBQSxDQUFDLENBQUM7R0FDeEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwJztcbmltcG9ydCBhdXRoQ29uZmlnIGZyb20gJ2F1dGgtY29uZmlnLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhKSB7XG4gIGF1cmVsaWEudXNlXG4gICAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAgIC5kZXZlbG9wbWVudExvZ2dpbmcoKVxuICAgICAgLnBsdWdpbignYXVyZWxpYS1icy1tb2RhbCcpXG4gICAgICAucGx1Z2luKCdhdXJlbGlhLXZhbGlkYXRpb24nLCAoY29uZmlnKSA9PiB7IGNvbmZpZy51c2VMb2NhbGUoJ3BsLVBMJykgfSlcbiAgICAgIC5wbHVnaW4oJ2F1cmVsaWEtYXV0aCcsIChiYXNlQ29uZmlnKT0+e1xuICAgICAgICBiYXNlQ29uZmlnLmNvbmZpZ3VyZShhdXRoQ29uZmlnKVxuICAgICAgfSk7XG5cblxuICAvL1VuY29tbWVudCB0aGUgbGluZSBiZWxvdyB0byBlbmFibGUgYW5pbWF0aW9uLlxuICAvL2F1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS1hbmltYXRvci1jc3MnKTtcbiAgLy9pZiB0aGUgY3NzIGFuaW1hdG9yIGlzIGVuYWJsZWQsIGFkZCBzd2FwLW9yZGVyPVwiYWZ0ZXJcIiB0byBhbGwgcm91dGVyLXZpZXcgZWxlbWVudHNcblxuICAvL0FueW9uZSB3YW50aW5nIHRvIHVzZSBIVE1MSW1wb3J0cyB0byBsb2FkIHZpZXdzLCB3aWxsIG5lZWQgdG8gaW5zdGFsbCB0aGUgZm9sbG93aW5nIHBsdWdpbi5cbiAgLy9hdXJlbGlhLnVzZS5wbHVnaW4oJ2F1cmVsaWEtaHRtbC1pbXBvcnQtdGVtcGxhdGUtbG9hZGVyJylcblxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbihhID0+IGEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
