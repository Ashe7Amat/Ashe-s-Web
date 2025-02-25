const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  type: String,
  category: String,
  orientation: String,
  image: {
    data: Buffer,
    contentType: String
  },
  createdAt: Date
});

module.exports = mongoose.model('Media', mediaSchema);