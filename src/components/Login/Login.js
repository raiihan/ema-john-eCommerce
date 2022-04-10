import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import loadingIcon from '../../Assests/gif/Loading_icon.gif';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    if (user) {
        navigate(from, { replace: true });
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        const email = (event.target.email.value);
        const password = (event.target.password.value);
        signInWithEmailAndPassword(email, password)

    }

    return (
        <div div className='form-container' >
            {
                loading
                    ?
                    <img src={loadingIcon} alt="Loading......" />
                    :
                    <div>
                        <h3 className='form-title'>Login</h3>
                        <form onSubmit={handleUserSignIn}>
                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" required />
                            </div>
                            <p style={{ color: 'red' }}>{error?.message}</p>
                            <div className="input-group">
                                <input type="submit" value="Login" className='form-btn' />
                            </div>
                        </form>
                        <p className='form-link'>New to Ema-john? <Link to={'/signup'}>Create a new Account</Link></p>

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
        </div >
    );
};

export default Login;