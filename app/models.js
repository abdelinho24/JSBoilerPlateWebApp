var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

//New Schema javascript object model
var Contact = new Schema({
    email:      { type: String },
    name: {
        first:  { type: String },
        last:   { type: String }
    },
    phone:      { type: String },
    gravatar:   { type: String }
});

var Book = new Schema({
    title:      { type: String },
    author:     { type: String },
    description:{ type: String },
    ISBN:       { type: String }
});

module.exports = {
    Contact: mongoose.model('Contact', Contact),
    Book:    mongoose.model('Book', Book)
};