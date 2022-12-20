import React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../images/Untitled-1.svg';
import logo2 from '../images/logo2.svg';
import NavWrapper from './style/Nav.style';

export const Navbar = () => {
  return (
    <NavWrapper>
    <div>
        <header className="header-area header-sticky">
            <div className="container">
            <div className="row">
                <div className="col-12">
                <nav className="main-nav">
                    <NavLink to="/" className="logo">
                        <span>Sub<span><img src={logo2}/></span><span className='kepr'>eeper</span></span>
                    </NavLink>
                    <ul className="nav">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li> 
                    <li><div className="border-first-button"><NavLink to="/signup">Sign Up</NavLink></div></li> 
                    </ul>        
                    <NavLink className='menu-trigger'>    
                        <span>Menu</span>
                    </NavLink>
                </nav>
                </div>
            </div>
            </div>
        </header>
    </div>
    </NavWrapper>
  )
}

export default Navbar;
