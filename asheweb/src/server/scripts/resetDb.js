const mongoose = require('mongoose');
const Media = require('../models/Media');

async function resetDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/asheweb');
    await Media.deleteMany({});
    console.log('Database cleared successfully');
  } catch (error) {
    console.error('Error clearing database:', error);
  } finally {
    mongoose.connection.close();
  }
}

resetDatabase();