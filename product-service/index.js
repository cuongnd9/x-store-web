require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Connect MongoDB.
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

// Port.
const port = process.env.PORT || 8000;

// Initialize app.
const app = express();

// Body parser.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enable cors.
app.use(cors());

// Routes.
app.get('/', (req, res) => res.send('<p>👋 Xin chào</p>'));

// Start server.
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
