import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromStorage } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const navigate = useNavigate();

    const handleRemoveProduct = existsProduct => {
        const restProduct = cart.filter(product => product.id !== existsProduct.id);
        setCart(restProduct);
        removeFromStorage(existsProduct.id);
    }
    return (
        <div className='main-container'>
            <div className="review-item-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    />)
                }
            </div>

            <div className="order-summary">
                <Cart cart={cart} >
                    <button onClick={() => navigate('/shipment')}>Procced Shipping</button>
                </Cart>
            </div>

        </div>
    );
};

export default Orders;