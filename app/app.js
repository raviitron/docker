const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB using the environment variable
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Example route
app.get('/', (req, res) => {
  res.send('Hello World from Node.js and MongoDB!');
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
