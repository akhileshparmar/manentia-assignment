require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const uploadRoutes = require('./routes/upload');
const metadataRoutes = require('./routes/metadata');
const authRoutes = require('./routes/auth');


const app = express();
const PORT = process.env.PORT || 8080;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/upload', uploadRoutes);
app.use('/api/metadata', metadataRoutes);
app.use('/api/auth', authRoutes);








app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});