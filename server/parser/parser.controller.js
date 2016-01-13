'use strict';
var PlanModel = require('../models/plan.js');

exports.parse = function (req, res) {
    var courses = req.body;
    //var courses = req.body.byIDs["INZ003789W"];//JSON.parse(req.body);
    //console.log("req body DASDASD ", courses);

    // retrieve my model

// create a blog post
    var plan = new PlanModel();

// create a comment
    plan.courses = courses;

    plan.save(function (err) {
        if (!err) console.log('Success!');
        else console.log("FAILED");
    });

    return res.status(200).send({message: 'Dane odebrano:'});
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