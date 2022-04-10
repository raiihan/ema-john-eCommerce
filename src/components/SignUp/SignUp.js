import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>Sign Up</h3>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="confirm-password" name="confirm-password" id="confirm-password" />
                    </div>
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

        </div>
    );
};

export default SignUp;