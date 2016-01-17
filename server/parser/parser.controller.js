'use strict';
var PlanModel = require('../models/plan.js');
var shortId = require('shortid');

exports.parse = function (req, res) {
    var courses = req.body;
    var plan = new PlanModel();
    plan.isEditable = true;

    plan.courses = courses;
    plan.publicId = shortId.generate();
    plan.privateId = shortId.generate();
    plan.module = "pwr";

    plan.save(function (err) {
        if (!err) console.log('Success!');
        else console.log("FAILED");
    });

    return res.status(200).send({message: 'Dane odebrano:', url: "http://localhost:9000/#/"+plan.privateId});
    /*Entity.findOne({email: req.body.email}, function (err, existingUser) {
        if (existingUser) {
            return res.status(409).send({message: 'Wybrany adres e-mail jest już w użyciu.'});
        }
        var user = new Entity({
            displayName: req.body.displayName,
            email: req.body.email,
            password: req.body.password
        });
        user.save(function () {
            return res.status(201).json({token: authUtils.createJWT(user)});
        });

    });*/

};