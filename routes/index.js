var express = require('express');
var router = express.Router();
let launchTime = new Date("12/29/2019 10:00").getTime();

/* GET home page. */
router.get('/', function(req, res, next) {
  let currentTime = new Date().getTime();
  let numberOfMilliseconds = parseInt(launchTime - currentTime);
  res.render('index', { title: 'Countdown to Launch', countDown: numberOfMilliseconds });
});

module.exports = router;
