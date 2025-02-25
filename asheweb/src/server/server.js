const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Media = require('./models/Media');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/asheweb')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Get media list
app.get('/api/media/:category', async (req, res) => {
  try {
    const media = await Media.find({ category: req.params.category }, '-image');
    res.json(media);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get image by ID
app.get('/api/media/image/:id', async (req, res) => {
  try {
    const media = await Media.findOne({ id: req.params.id });
    if (!media || !media.image) {
      return res.status(404).send('Image not found');
    }
    
    res.set('Content-Type', media.image.contentType);
    res.send(media.image.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));