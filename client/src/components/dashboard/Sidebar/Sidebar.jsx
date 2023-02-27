import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../Dashboard.scss';
import logo from '../../../images/logo2.svg';
import Nav from '../Nav/Nav';
import CollegeTodo from '../todo/CollegeTodo';
import CustomTile from '../Custom/CustomTile';
import Chat from '../Chat/Chat';
import Profile from '../Profile/Profile';

import { useLogout } from '../../../hooks/useLogout';

const Sidebar = () => {

    const [active, setActive] = useState("Nav");
    const {logout} = useLogout();

    const sideLink = document.querySelectorAll("a");

    sideLink.forEach(element => {
        element.addEventListener("click", function() {
            sideLink.forEach(a=>a.classList.remove("active"))

            this.classList.add("active");
        })
    })

    function sidebarClick() {
        document.querySelector('nav').classList.toggle('close');
    }

    function searchClick() {
        document.querySelector('nav').classList.remove('close');
    }

    function modeSwitch(){
        document.querySelector('.sidebar-main').classList.toggle('dark');

        if(document.querySelector('.sidebar-main').classList.contains('dark')){
            document.querySelector('.mode-text').innerHTML = "Light Mode";
        }else{
            document.querySelector('.mode-text').innerHTML = "Dark Mode";
        }
    }

    return (
        <div className='sidebar-main'>
            <nav className="sidebar close">
            <header>
                <div className="image-text">
                    <NavLink to="/">
                        <span className="image">
                            <img src={logo} alt=""/>
                        </span>
                    </NavLink>

                    <div className="text logo-text">
                        <span className="name">Pragati</span>
                        <span className="profession">Dashboard</span>
                    </div>
                </div>
                <i className='bx bx-chevron-right toggle' onClick={sidebarClick}></i>
                </header>

                <div className="menu-bar">

                <div className="menu">
                        <li className="search-box" onClick={searchClick}>
                            <i className='bx bx-search icon'></i>
                            <input type="text" placeholder="Search..." />
                        </li>

                        <li className="nav-link">
                            <a className="active" onClick={() => setActive("Nav")}>
                                <i class='bx bx-home icon'></i>
                                <span className="text nav-text">Home</span>
                            </a>
                        </li>

                        <li className="nav-link">
                            <a onClick={() => setActive("CollegeTodo")}>
                                <i class='bx bx-list-check icon'></i>
                                <span className="text nav-text">Todo List</span>
                            </a>
                        </li>

                        <li className="nav-link">
                            <a onClick={() => setActive("Chat")}>
                                <i class='bx bx-star icon'></i>
                                <span className="text nav-text">Favourite Tiles</span>
                            </a>    
                        </li>

                        <li className="nav-link">
                            <a onClick={() => setActive("Custom")}>
                                <i class='bx bxs-add-to-queue icon'></i>
                                <span className="text nav-text">Custom Tiles</span>
                            </a>
                        </li>
                    
                </div>
                <div className="bottom-content">
                    <li className="">
                        <a onClick={() => setActive("Profile")}>
                            <i className='bx bx-user icon'></i>
                            <span className="text nav-text">Profile</span>
                        </a>
                    </li>

                    <li className="">
                        <a onClick={logout}>
                            <i className='bx bx-log-out icon' ></i>
                            <span className="text nav-text">Logout</span>
                        </a>
                    </li>

                    <li className="mode">
                        <div className="sun-moon">
                            <i className='bx bx-moon icon moon'></i>
                            <i className='bx bx-sun icon sun'></i>
                        </div>
                        <span className="mode-text text">Dark mode</span>

                        <div className="toggle-switch" onClick={modeSwitch}>
                            <span className="switch"></span>
                        </div>
                    </li>
                    
                </div>
                </div>
            </nav>

            {active === "Nav" && <Nav />}
            {active === "CollegeTodo" && <CollegeTodo />}
            {active === "Custom" && <CustomTile/>}
            {active === "Chat" && <Chat/>}
            {active === "Profile" && <Profile/>}
        </div>
    )
}

export default Sidebar;