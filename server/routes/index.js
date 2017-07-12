const express = require('express');
const router = express.Router();

router.get('/getIndex', indexController);


function indexController(req, res, next) {
  let user = {};

  if(req.cookies.user){
    user = {
      id: req.cookies.user.userid,
      username: req.cookies.user.username
    };
  }
  
  res.json({
    code: 0,
    user: user
  });
}

module.exports = router;