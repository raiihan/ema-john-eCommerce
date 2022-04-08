import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { handleRemoveProduct, product } = props;
    const { name, shipping, price, quantity, img } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <h3 className="review-item-name" title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</h3>
                    <p>Price <span className='orange'>${price}</span></p>
                    <p><small>Shipping <span className='orange'>${shipping}</span></small></p>
                    <p><small>Quanitity <span className='orange'>{quantity}</span></small></p>
                </div>
                <div className="review-item-remove">
                    <button onClick={() => handleRemoveProduct(product)} className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;