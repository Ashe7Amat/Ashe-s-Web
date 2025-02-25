const mongoose = require('mongoose');
const Media = require('../models/Media');
const madridData = require('../data/madridData.json');

async function populateDb() {
  try {
    await mongoose.connect('mongodb://localhost:27017/asheweb');
    
    // Transform the data to convert date format
    const transformedData = madridData.map(item => ({
      ...item,
      createdAt: new Date(item.createdAt.$date)
    }));
    await Media.insertMany(transformedData);
    console.log('Database populated successfully');
  } catch (error) {
    console.error('Error populating database:', error);
  } finally {
    mongoose.connection.close();
  }
}

populateDb();