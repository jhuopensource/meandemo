var mongoose = require('mongoose');

var entrySchema = new mongoose.Schema({
  URL: String,
  title: String,
  author: String,
  description: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('entry', entrySchema);
