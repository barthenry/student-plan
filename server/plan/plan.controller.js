'use strict';
var planModel = require('../models/plan.js');

exports.get = function(req,res){
    //var module = req.params.module;
    var id = req.params.id;

    planModel.findOne({privateId: id}, function (err, plan) {
        if(!plan){
            console.log("Nie znaleziono planu dla id: ", id);
            return res.status(404).send({message: 'Brak takiego planu.'});
        }

        console.log("Wysyłam plan dla id: ", id);
        return res.status(200).send(plan);
    });
};
