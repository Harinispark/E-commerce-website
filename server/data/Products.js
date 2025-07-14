// server/models/products.js
const products = Array.from({ length: 100 }, (_, index) => ({
    _id: index + 1,
    name: `Product ${index + 1}`,
    price: (Math.random() * 100).toFixed(2), // Random price between 0 and 100
    image: `https://picsum.photos/200/200?random=${index + 1}`, // Random images
  }));
  
  module.exports = products;
  