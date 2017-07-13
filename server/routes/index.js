const express = require('express');
const router = express.Router();
const User = require('../model/user');

router.get('/getIndex', indexController);


function indexController(req, res, next) {
  let user = req.cookies.user;
  if (user && typeof(user) === 'object' && user.username) {
    User.getUserByName(user.username).then((doc) => {
      let u = {
        userid: doc._id,
        username: doc.username,
        sex: doc.sex
      };

      res.json({
        code: 0,
        user: u
      });
    })
  } else {
    res.json({
      code: 0,
      user: u
    });
  }
}

module.exports = router;