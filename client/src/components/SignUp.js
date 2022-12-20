import React, {useState} from 'react';   
import {useSignup} from './hooks/useSignup';
import {useLogin} from './hooks/useLogin';
import '../../src/App.css';
import Wrapper from './style/SignUp.style';
import google from '../images/Google__G__Logo.svg';

export const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signup, error, isLoading} = useSignup();
    const {login, loginerror, loginLoading} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
        await login(email, password)

    }

    function signUpClick() {
        document.querySelector('.container').classList.add('right-panel-active');
    }

    function signInClick() {
        document.querySelector('.container').classList.remove('right-panel-active');
    }

  return (
    <Wrapper>
    <div className="registration">
        <h2>Get Started</h2>
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="/category">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <img src={google} alt=""/>
                            <a href="#" className="social">SignUp With Google</a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" required/>
                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
                        <button disabled={isLoading} type="submit">Sign Up</button>
                        {error && <div className="error">{error}</div>}
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="/category">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <img src={google} alt=""/>
                            <a href="#" className="social">Continue With Google</a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
                        <a className = "forgot" href="#">Forgot your password?</a>
                        <button disabled={loginLoading} type="submit">Sign In</button>
                        {error && <div className="error">{loginerror}</div>}
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={signInClick}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your details and get started with us.</p>
                            <button className="ghost" id="signUp" onClick={signUpClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </Wrapper>
  )
}

export default SignUp;