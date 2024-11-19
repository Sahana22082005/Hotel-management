// src/context/OrderContext.js
import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);

    const placeOrder = (cart) => {
        const newOrder = {
            id: new Date().getTime(),
            items: cart,
            status: 'Pending',
        };
        setOrders((prev) => [...prev, newOrder]);
    };

    return (
        <OrderContext.Provider value={{ orders, placeOrder }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrder = () => useContext(OrderContext);
