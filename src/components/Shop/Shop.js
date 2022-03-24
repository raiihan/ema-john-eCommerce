import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='main-container'>
            <div className="shop-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product} />)
                }
            </div>
            <div className="order-summary">
                <h1>Order summay</h1>
            </div>
        </div>
    );
};

export default Shop;