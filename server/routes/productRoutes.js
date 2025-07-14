// server/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const products = require('../data/products'); // Import the products array
const verifyToken = require('../middleware/auth');

router.get('/', verifyToken, async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

const Product = require('../models/Product'); // Assuming Product model is created

// Get product by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});




// Route to get all products
router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;

// Add product
router.post('/', async (req, res) => {
  try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).json(product);
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
});

// Update product
router.put('/:id', async (req, res) => {
  try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (product) {
          res.json(product);
      } else {
          res.status(404).json({ message: 'Product not found' });
      }
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
});

// Delete product
router.delete('/:id', async (req, res) => {
  try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (product) {
          res.json({ message: 'Product removed' });
      } else {
          res.status(404).json({ message: 'Product not found' });
      }
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
});
