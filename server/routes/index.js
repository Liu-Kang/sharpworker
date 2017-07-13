const express = require('express');
const router = express.Router();

router.get('/getIndex', indexController);


function indexController(req, res, next) {
  let user = {};
  if(req.cookies.uid && req.cookies.uid.length > 0){
    user = {
      id: req.cookies.user.userid
    };
  }
  
  res.json({
    code: 0,
    user: user
  });
}

module.exports = router;