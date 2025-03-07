const mongoose = require('mongoose');

// Define a schema for the Item model
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String
});

// Create and export the Item model
const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
