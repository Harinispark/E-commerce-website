


// server/app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes'); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(error => console.log("MongoDB connection error:", error));

// Routes
app.use('/api/users', userRoutes); // User routes
app.use('/api/products', productRoutes);// Product routes


// Simple test route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Example request in client-side
axios.get('http://localhost:5000/api/products', {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

