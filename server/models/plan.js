'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var group = new Schema({
    id: String,
    teacher: String,
    day: String,
    time: String,
    place: String,
    isChosen: Boolean
});

var course = new Schema({
    id: String,
    name: String,
    form: String,
    groups: {
        byIDs: [group],
        length: Number
    },
    isFilterEnabled: Boolean,
    isGroupChosen: Boolean,
    isSelected: Boolean
});

var plan = new Schema({
    courses: {
        byIDs: Object
    },
    publicId: String,
    privateId: String,
    isEditable: Boolean,
    module: String
});

module.exports = mongoose.model('Plan', plan);