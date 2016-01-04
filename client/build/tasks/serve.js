var gulp = require('gulp');
var browserSync = require('browser-sync');
var paths = require('../paths');
var proxy = require('proxy-middleware');
var url = require('url');

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', ['build', 'node'], function(done) {
  var proxyOptionsAccessControl = function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  };

  var setHeader = function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  };

  var proxyOptionsApiRoute = url.parse('http://localhost:' + paths.serverPort +  '/api') ;
  proxyOptionsApiRoute.route = '/api';

  var proxyOptionsAuthRoute = url.parse('http://localhost:' + paths.serverPort +  '/auth') ;
  proxyOptionsAuthRoute.route = '/auth';


  browserSync({
    online: false,
    open: false,
    port: paths.clientPort,
    server: {
      baseDir: ['.'],
      /*middleware: function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }*/
      middleware: [
          setHeader,
          proxyOptionsAccessControl,
          proxy(proxyOptionsApiRoute),
          proxy(proxyOptionsAuthRoute)
      ]
    }
  }, done);
});
