import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/Logo.svg';
import NavWrapper from '../style/Nav.style';

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
                        <span><img src={logo}/><span className='kepr'>RAGATI</span></span>
                    </NavLink>
                    <ul className="nav">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/features">Features</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li> 
                    <li><div className="border-first-button"><NavLink to="/auth">Sign Up</NavLink></div>
                    </li> 
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
