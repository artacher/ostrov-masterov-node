var express = require('express');
var router = express.Router();

var fs = require('fs');
var rawData = fs.readFileSync('data/site-data.json');
var data = JSON.parse(rawData);
console.log(data.workshops)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/history', (req, res) => {
  res.render('history', {
    path: "history"
  });
});

router.get('/contact', (req, res) => {
  res.render('contact', {
    path: 'contact'
  });
});

router.get('/openworkshops', (req, res) => {
  res.render('openworkshops', {
    path: 'openworkshops',
    data
  });
});

router.get('/workshop', (req, res) => {
  res.render('workshop', {
    path: 'workshop',
    data
  });
});

module.exports = router;
