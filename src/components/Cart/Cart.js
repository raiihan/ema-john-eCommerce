import React from 'react';
import './Cart.css';
const Cart = ({ cart }) => {
    const reducer = (previous, current) => previous + current.price * current.quantity;
    const total = cart.reduce(reducer, 0);
    let quantity = 0;
    let shipping = 0;
    for (const item of cart) {
        quantity += item.quantity;
        shipping += item.shipping;
    }

    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Item: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;