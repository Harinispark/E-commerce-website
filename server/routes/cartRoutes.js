const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart'); // Assuming a Cart model is created

// Add item to cart
router.post('/add', async (req, res) => {
    const { userId, productId, quantity } = req.body;
    try {
        const cart = await Cart.findOne({ userId });
        if (cart) {
            const itemIndex = cart.items.findIndex(item => item.productId == productId);
            if (itemIndex > -1) {
                cart.items[itemIndex].quantity += quantity;
            } else {
                cart.items.push({ productId, quantity });
            }
            await cart.save();
        } else {
            const newCart = new Cart({
                userId,
                items: [{ productId, quantity }]
            });
            await newCart.save();
        }
        res.json({ message: 'Product added to cart' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Remove item from cart
router.post('/remove', async (req, res) => {
    const { userId, productId } = req.body;
    try {
        const cart = await Cart.findOne({ userId });
        if (cart) {
            cart.items = cart.items.filter(item => item.productId != productId);
            await cart.save();
            res.json({ message: 'Product removed from cart' });
        } else {
            res.status(404).json({ message: 'Cart not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
