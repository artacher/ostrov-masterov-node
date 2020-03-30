var express = require('express');
var router = express.Router();

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

module.exports = router;
