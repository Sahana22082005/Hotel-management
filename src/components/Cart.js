// src/components/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { useOrder } from '../context/OrderContext';
import '../styles.css';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity } = useCart();
    const { placeOrder } = useOrder();

    const handleOrderNow = () => {
        placeOrder(cart);
        alert('Order placed successfully!');
        // Optionally, you can clear the cart after placing the order
        // removeFromCart();
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            <img src={item.image} alt={item.title} style={{ width: '50px' }} />
                            <span>{item.title} - ${item.price} x {item.quantity}</span>
                            <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                style={{ width: '50px', marginLeft: '10px' }}
                            />
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            {cart.length > 0 && (
                <button onClick={handleOrderNow} className="order-button">Order Now</button>
            )}
        </div>
    );
};

export default Cart;
