var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


// respond with "hello world" when a GET request is made to the homepage
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/training', function (req, res) {
  res.render('training')
})

router.get('/recipes', function (req, res) {
  res.render('recipes')
})
router.get('/story', function (req, res) {
  res.render('story')
})