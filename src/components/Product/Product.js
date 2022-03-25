import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = ({ product, handleShoppingCart }) => {
    const { img, name, seller, ratings, price, } = product;
    return (
        <div className='cart-container'>
            <img src={img} alt="Product" />
            <div className="product-info">
                <h3>Name: {name}</h3>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Ratting: {ratings} stars</small></p>
            </div>
            <button onClick={() => handleShoppingCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;