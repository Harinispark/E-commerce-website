import React, { useState } from 'react';
import axios from 'axios';
import Notification from '../components/Notification';

const OrderPage = () => {
    const [notification, setNotification] = useState('');

    const placeOrder = async () => {
        try {
            await axios.post('/api/orders'); // Assuming order endpoint
            setNotification('Your order has been placed successfully!');
        } catch (error) {
            setNotification('Error placing order');
        }
    };

    return (
        <div>
            <h1>Order Page</h1>
            <button onClick={placeOrder}>Place Order</button>
            <Notification message={notification} />
        </div>
    );
};

export default OrderPage;
