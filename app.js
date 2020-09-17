var mongoose = require('mongoose');
var db = require('./model');

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

    $("#Submit").on("click", function(){
      updateContact();
    });