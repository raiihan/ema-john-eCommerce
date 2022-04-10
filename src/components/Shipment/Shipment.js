import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {

        setEmail(user?.email)
    }, [])

    const handleNamelBlur = event => {
        setName(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }
    const handleShipment = event => {
        event.preventDefault();
        const shipping = { name, email, address, phone };
        console.log(shipping);
    }
    return (
        <div className='form-container'>

            <div>
                <h3 className='form-title'>Sign Up</h3>
                <form onSubmit={handleShipment}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNamelBlur} type="text" name="name" id="name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input value={user?.email} type="email" name="email" readOnly style={{ backgroundColor: '#dddddd' }} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="address" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhoneBlur} type="text" name="phone" id="phone" required />
                    </div>
                    <div className="input-group">
                        <input type="submit" value="Add Shipping" className='form-btn' />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Shipment;