import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
    <div className="product-card">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        {/* Link to the specific product page */}
        <Link to={`/product/${product.id}`}>
            <button>View Details</button>
        </Link>
    </div>
);

export default ProductCard;
