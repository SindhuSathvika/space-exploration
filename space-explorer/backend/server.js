const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
const missionRoutes = require('./routes/missions');
const planetRoutes = require('./routes/planets');
const authRoutes = require('./routes/auth');

app.use('/missions', missionRoutes);
app.use('/planets', planetRoutes);
app.use('/auth', authRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
