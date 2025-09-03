const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Database Connection
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on('connected', () => console.log('✅ Connected to MongoDB'));
mongoose.connection.on('error', (err) => console.log('❌ Error connecting to MongoDB:', err));

// Models
require('./models/user');
require('./models/post');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(require('./routes/auth'));
app.use(require('./routes/post'));
app.use(require('./routes/user'));

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
