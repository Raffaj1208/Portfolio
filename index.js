
/*var mongoose = require('mongoose');
var express = require('express');
var app = express();
var db = require('./model');

var Port = process.env.Port || 3000;
app.listen(Port, function(){
    console.log('Listening on ' + Port);
});

var MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:contacts';
mongoose.connect(MONGO_URI, {useNewUrlParser: true});

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
    $("#Submit").on("click", function(error, response){
    console.log('button active')
    
    name = $('#name').val();
    email = $('#email').val();
    message = $('#message').val();
    contact = {
        name: name,
        email: email,
        message: message
    };console.log(contact);

    $('#input').append(contact);

    });