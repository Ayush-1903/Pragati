import React, { useState, useContext } from "react";
import { useSignup } from "../../../hooks/useSignup";
import { useLogin } from "../../../hooks/useLogin";
import "../../../App.css";
import authImage from "../images/scattered-forcefields.svg";
import Wrapper from "../style/Auth.style";
import { NavLink } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  isSchoolStudent: false,
};

const Auth = () => {

  const [formData, setFormData] = useState(initialState);
  const { signup, signupError, setSignupError, signupIsLoading } = useSignup();
  const { login, loginError, setLoginError, loginIsLoading } = useLogin();

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    await signup(
      formData.firstName,
      formData.lastName,  
      formData.email,
      formData.password,
      formData.isSchoolStudent
    );
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    await login(formData.email, formData.password);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  function signUpClick() {
    document.querySelector(".container").classList.add("right-panel-active");
  }
  function signInClick() {
    document.querySelector(".container").classList.remove("right-panel-active");
  }

  return (
    <Wrapper>
      <div
        className="registration"
        style={{
          backgroundImage: `url(${authImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h2 data-aos="fade-down" data-aos-duration="800">Get Started</h2>
        <div className="container" id="container" data-aos="zoom-in" data-aos-duration="800">
          <div className="form-container sign-up-container">
            <form onSubmit={handleSignupSubmit}>
              <h1>Create Account</h1>

              <input
                name="firstName"
                label="firstName"
                type="text"
                placeholder="First Name"
                required
                onChange={handleChange}
                value={formData.firstName}
              />
              <input
                name="lastName"
                label="lastName"
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                value={formData.lastName}
              />
              <input
                name="email"
                label="Email"
                type="email"
                placeholder="Email"
                required
                onChange={handleChange}
                value={formData.email}
              />
              <input
                name="password"
                label="password"
                type="password"
                placeholder="Password"
                required
                onChange={handleChange}
                value={formData.password}
              />
              <div className="error">{signupError}</div>
              <button type="submit">Sign Up</button>
              <span>Already registered? <NavLink onClick={signInClick}>Login</NavLink></span>
            </form>
          </div>

          <div className="form-container sign-in-container">
            <form onSubmit={handleLoginSubmit}>
              <h1>Log in</h1>

              <input
                name="email"
                label="email"
                type="email"
                placeholder="Email"
                required
                onChange={handleChange}
              />
              <input
                name="password"
                label="password"
                type="password"
                placeholder="Password"
                required
                onChange={handleChange}
              />
              <div className="error">{loginError}</div>

              <button type="submit">Log In</button>
              <span>Not registered? <NavLink onClick={signUpClick}>Signup</NavLink></span>
              <NavLink className='forgot' to = "/auth/forgot-password">Forgot password ?</NavLink>
            </form>
          
          </div>

          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info.</p>
                <button className="ghost" id="signIn" onClick={signInClick}>
                  Log In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your details and get started with us.</p>
                <button className="ghost" id="signUp" onClick={signUpClick}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </Wrapper>
  );
};

export default Auth;
