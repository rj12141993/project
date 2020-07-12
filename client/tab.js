const bcrypt = require('bcryptjs');

var express = require('express');
var router = express.Router();

require('../lib/db');
const Usermodel = require('../models/user');

/* GET home page. */

 
   router.get('/user', function(req, res) {
     res.render('user');
     });

  router.post('/user', function(req, res) {
     const emailFromUser = req.body.email;
     const password = req.body.password;

    // const user = DB.getUserByEmail(email);
  Usermodel.findOne({email: emailFromUser},function(err, user){
    if(err || !user) {
    return res.redirect('/user');
    }
   bcrypt.compare(password, user.password, function(err, isSame) {
     if(err) {
       throw err;
     }
 
     if(isSame) {
       req.session.loggedIn = true;
       req.session.user = user;
       res.redirect('/header');
     }
     else {
       res.redirect('/user');
     }
   });
 });
    
  });

router.get('/registration', function(req, res) {
   res.render('registration');
   });

router.post('/registration', function(req, res) {
  // req.body contains the user information.
    const password = req.body.password;

bcrypt.hash(password, 8, function(err, passHash) {
    if(err) {
      throw err;
    }
    const user = new Usermodel({
      name: req.body.name,
      email: req.body.email,
      password: passHash
    });
    user.save(function(err){
      if(err){
        console.log('unable to save db',err.stack);
        throw err;
      }
    res.redirect('/user');
    });
    });
  });
  module.exports = router;


