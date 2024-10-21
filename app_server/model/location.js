const mongoose = require('mongoose');

// Define the schema for a location
const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  // Add other fields as needed
  createdOn: {
    type: Date,
    default: Date.now
  }
});

// Create a model using the schema
const Location = mongoose.model('Location', locationSchema);

// Export the model
module.exports = Location;