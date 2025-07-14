import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    if (cart.length === 0) {
        return <p>Your cart is empty.</p>;
    }
    return (
        <div>
            <h2>Your Cart</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id} style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
                        <img src={item.image} alt={item.title} style={{ width: '50px', marginRight: '10px' }} />
                        <p><strong>{item.title}</strong></p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ${item.price}</p>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p>
                <strong>Total:</strong> $
                {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </p>
        </div>
    );
};


export default CartPage;
