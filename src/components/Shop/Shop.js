import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { getCartInfo, setLocalStorage } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleShoppingCart = (selectedProduct) => {
        let newItems = [];
        const addedItem = cart.find(product => product.id === selectedProduct.id);
        if (!addedItem) {
            selectedProduct.quantity = 1;
            newItems = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            addedItem.quantity += 1;
            newItems = [...rest, addedItem];
        }
        setCart(newItems);
        setLocalStorage(selectedProduct.id)

    }
    return (
        <div className='main-container'>
            <div className="shop-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleShoppingCart={handleShoppingCart}
                    />)
                }
            </div>
            <div className="order-summary">
                <Cart cart={cart} >
                    <Link to={'/orders'}>
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;