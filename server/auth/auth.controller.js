'use strict';
var Entity = require('../models/user.js');
var jwt = require('jwt-simple');
var authUtils = require('./helpers');

exports.signup = function (req, res) {
    console.log("req body " + req.body.email);
    Entity.findOne({email: req.body.email}, function (err, existingUser) {
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

    });
};

exports.login = function (req, res) {
    Entity.findOne({email: req.body.email}, '+password', function (err, user) {
        if (!user) {
            return res.status(401).json({message: 'Nieprawidłowy e-mail lub hasło.'});
        }
        user.comparePassword(req.body.password, function (err, isMatch) {
            if (!isMatch) {
                return res.status(401).send({message: 'Nieprawidłowy e-mail lub hasło.'});
            }
            res.send({token: authUtils.createJWT(user)});
        });
    });
};