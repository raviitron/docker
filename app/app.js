const express = require('express');
const mongoose = require('mongoose');
const Item = require('./models/Item');  // Import the Item model

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB using the environment variable
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Route to add an item to the database
app.post('/add-item', async (req, res) => {
  try {
    const { name, description } = req.body;
    const newItem = new Item({ name, description });
    await newItem.save();
    res.status(201).send('Item added successfully!');
  } catch (error) {
    res.status(500).send('Error adding item: ' + error.message);
  }
});

// Route to fetch all items from the database
app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).send('Error fetching items: ' + error.message);
  }
});

// Default route
app.get('/', (req, res) => {
  res.send('Hello World from Node.js and MongoDB!');
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
