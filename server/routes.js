'use strict';

module.exports = function (app) {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:9000");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.use('/auth',require('./auth'));
    app.use('/parse',require('./parser'));
    app.use('/plan',require('./plan'));
};