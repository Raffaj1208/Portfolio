$("#Submit").on("click", function(error, response){

var name = $('#name').val();
var email = $('#email').val();
var message = $('#message').val();
var contact = {
    name: name,
    email: email,
    message: message
};
console.log(contact);
$('#recordContact').append('<p>' + name + '<br>' + email + '<br>' + message + '</p>');

});

var mongoose = require('mongoose');

/*
var $ = require('jquery');
var mongoose = require('mongoose');
var express = require('express');
var app = express();
var db = require('./model');

var Port = process.env.Port || 3000;


var MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:contacts';
mongoose.connect(MONGO_URI, {useNewUrlParser: true});
        
app.listen(Port, function(){
            console.log('Listening on ' + Port);
        });

var updateContact = function(){
  var results = [];
  var name = $('#name').input().val();
  var email = $('#email').input().val();
  var message = $('#message').input().val();

    if (name !== 'null' && email !=='null' && message !=='null'){
        results.push({
            name: name,
            email: email,
            summary: summary
        });
        $('#input').append(results);
    }
    db.Contact.create(results).then(function(newContact){
        results.render({newContact});
        console.log(newContact);
    }).catch(function(error){
        console.log(error);
    db.Contact.find({}).then(function(dbData){
        console.log(dbData);
        results.json(dbData);
    });
    });
};
*/