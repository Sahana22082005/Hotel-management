// src/components/OrderTracking.js
import React from 'react';
import { useOrder } from '../context/OrderContext';
import '../styles.css';

const OrderTracking = () => {
    const { orders } = useOrder();

    return (
        <div className="order-tracking">
            <h2>Your Orders</h2>
            {orders.length === 0 ? (
                <p>No orders placed yet.</p>
            ) : (
                <ul>
                    {orders.map((order) => (
                        <li key={order.id}>
                            <span>Order ID: {order.id}</span>
                            <ul>
                                {order.items.map((item) => (
                                    <li key={item.id}>
                                        {item.title} - ${item.price} x {item.quantity}
                                    </li>
                                ))}
                            </ul>
                            <span>Status: {order.status}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default OrderTracking;
