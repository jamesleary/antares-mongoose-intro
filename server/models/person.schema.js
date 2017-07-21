var mongoose = require('mongoose');
var Schema = mongoose.Schema;  //capitalized since we will be using it as a constructor

// create the Schema
var personSchema = new Schema ({
  name: {type: String, required: true, unique: true},
  location: {type: String}
});

// create the model
var Person = mongoose.model('Person', personSchema); //Person is an object that uses the Schema to give
                                                     // properties, ie can use for uniqueness within a collection

//export
module.exports = Person;  //sending the Person object
