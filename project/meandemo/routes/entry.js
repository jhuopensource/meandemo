var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Entry = require('../models/Entry.js');

/* GET ALL EntryS */
router.get('/', function(req, res, next) {
  Entry.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Entry BY ID */
router.get('/:id', function(req, res, next) {
  Entry.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Entry */
router.post('/', function(req, res, next) {
  Entry.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Entry */
router.put('/:id', function(req, res, next) {
  Entry.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Entry */
router.delete('/:id', function(req, res, next) {
  Entry.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
