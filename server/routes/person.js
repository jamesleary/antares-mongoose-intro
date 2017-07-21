var express = require('express');
var router = express.Router();
var Person = require('../models/person.schema.js');

router.delete('/:id', function (req, res){
  console.log('delete with id: ', req.params.id);
  Person.findByIdAndRemove(
    {_id: req.params.id},
    function(err, data){
    if (err) {
      console.log('save error ', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });

});

router.post('/', function(req, res){
  console.log('log the data', req.body);

  var addPerson = new Person(req.body); //What if our req.body has other properties not included with Schema?
  addPerson.save(function(err, data){
    console.log('saved data: ', data);
    if (err) {
      console.log('save error ', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });

});// end of post

router.get('/', function(req, res){
  Person.find({}, function(err, data){
    if (err) {
      console.log('GET error', err);

    } else {
      res.send(data);
    }
  });
});//GET end

router.put('/:id', function(req,res){
  console.log('new location: ', req.body);
  Person.findByIdAndUpdate(
    { _id: req.params.id }, // access by ID how to find
    { $set: { location: req.body.location } }, // setting the updated field
    function(err, data){
      if (err) {
        console.log('save error ', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    }

  );
});//end of PUT
router.put('/addPoints/:id', function(req,res){
  console.log('add points: ', req.body);

  Person.findByIdAndUpdate(
    { _id: req.params.id }, // access by ID how to find
    { $set: { internetPts: req.body.addHun} }, // setting the updated field
    function(err, data){
      if (err) {
        console.log('save error ', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    }
  );
});//end of PUT






module.exports = router;
