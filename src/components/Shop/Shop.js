import React, { useState, useEffect } from 'react';
import { getCartInfo, setLocalStorage } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getCartInfo();
        const saveCart = [];
        for (const id in storedCart) {
            const addedCart = products.find(product => product.id === id);
            if (addedCart) {
                addedCart.quantity = storedCart[id]
                saveCart.push(addedCart);
            }
        }
        setCart(saveCart);
    }, [products])

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
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;