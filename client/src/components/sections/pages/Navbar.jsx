import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/Logo.svg';
import NavWrapper from '../style/Nav.style';

export const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <NavWrapper>
            <nav className="main-nav">
                <NavLink to="/" className="logo">
                    <span><img src={logo}/></span>
                </NavLink>
                <ul className= {showMenu ? "mobile-links" : "nav"} onClick={() => setShowMenu(false)}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/features">Features</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li> 
                    <li><div className="border-first-button"><NavLink to="/auth">Sign Up</NavLink></div></li> 
                </ul>        
                <button className='menu-trigger' onClick={() => setShowMenu(!showMenu)}>    
                    {showMenu ? (
                        <i className='bx bx-x-circle'></i>
                        ) : ( 
                        <i className='bx bx-menu'></i>
                        )
                    }
                </button>
            </nav>
        </NavWrapper>
    )
}

export default Navbar;
