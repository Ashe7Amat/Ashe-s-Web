const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Media = require('../models/Media');
const madridData = require('../data/madridData.json');
const milanData = require('../data/milanData.json');
const graduacioData = require('../data/graduacioData.json');

async function uploadImages() {
  try {
    await mongoose.connect('mongodb://localhost:27017/asheweb');
    
    const allData = [...madridData, ...milanData, ...graduacioData];
    
    for (const item of allData) {
      const imagePath = path.join(__dirname, '../../../src', item.url);
      const imageBuffer = fs.readFileSync(imagePath);
      
      const media = new Media({
        id: item.id,
        title: item.title,
        description: item.description,
        type: item.type,
        category: item.category,
        orientation: item.orientation,
        image: {
          data: imageBuffer,
          contentType: 'image/jpeg'
        },
        createdAt: new Date()
      });

      await media.save();
      console.log(`Uploaded: ${item.title}`);
    }
    
    console.log('All images uploaded successfully');
  } catch (error) {
    console.error('Error uploading images:', error);
  } finally {
    mongoose.connection.close();
  }
}

uploadImages();