const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // .env variables

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB
const dbURI = process.env.MONGO_URI || 'mongodb://localhost:27017/pomodoro';
mongoose.connect(dbURI)
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// Routes
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));