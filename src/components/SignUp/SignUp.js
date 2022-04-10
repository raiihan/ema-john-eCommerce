import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import loadingIcon from '../../Assests/gif/Loading_icon.gif';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassWord, setConfirmPassword] = useState('');
    const [customError, setCustomError] = useState('');
    const navigate = useNavigate()

    const [createUserWithEmailandPassword, user,
        loading, error] = useCreateUserWithEmailAndPassword(auth);
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    if (user) {
        navigate('/');
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassWord) {
            setCustomError("Your confirm password didn't matched")
            return
        }
        if (password < 6) {
            setCustomError('Password must be greater than 6 characters')
            return;
        }
        createUserWithEmailandPassword(email, password)
    }
    return (
        <div className='form-container'>
            {
                loading
                    ?
                    <img src={loadingIcon} alt="Loading......" />
                    :
                    <div>
                        <h3 className='form-title'>Sign Up</h3>
                        <form onSubmit={handleCreateUser}>
                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <input onBlur={handleEmailBlur} type="email" name="email" id="email" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="confirm-password">Confirm Password</label>
                                <input onBlur={handleConfirmPasswordBlur} type="password" name="confirmPassword" id="confirm-password" required />
                            </div>
                            <p style={{ color: 'red' }}>{customError}</p>
                            <p style={{ color: 'red' }}>{error?.message}</p>
                            <div className="input-group">
                                <input type="submit" value="Sign Up" className='form-btn' />
                            </div>
                        </form>

                        <p className='form-link'>Already have an account? <Link to={'/Login'}>Login</Link></p>

                        <div className='line'>
                            <div className="left-line" />
                            <p>or</p>
                            <div className="right-line" />
                        </div>
                        <div className="google-singin">
                            <p><FcGoogle size={22} /><span>Continue With Google</span></p>
                        </div>
                    </div>
            }
        </div>
    );
};

export default SignUp;