var path = require('path');
var appRoot = 'src/';
var outputRoot = 'dist/';
var exportSrvRoot = 'export/';
var serverBaseDir = path.normalize('./../server');
var nodeStartupScript = 'app.js';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  style: 'styles/**/*.css',
  output: outputRoot,
  exportSrv: exportSrvRoot,
  doc: './doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/',
  clientPort: 9000,
  serverPort: 5000,
  serverBaseDir : serverBaseDir,
  nodeStartUpScriptPath: path.join( serverBaseDir,  nodeStartupScript)
};
