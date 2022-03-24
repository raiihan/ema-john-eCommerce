import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="logo" />
            <div>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/order-review">Order Review</a>
                <a href="/about">About Us</a>
            </div>
        </nav>
    );
};

export default Header;