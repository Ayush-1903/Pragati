import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../Dashboard.scss';
import logo from '../images/logo2.svg';
import Mainnav from '../Nav/Mainnav/Mainnav';
import VideoNav from '../Nav/VideosNav/VideoNav';
import Todo from '../Todo/Todo';
import CustomTile from '../Custom/CustomTile';
import Profile from '../Profile/Profile';
import FavTile from '../Tiles/tile/FavTiles/FavTile';
import { useLogout } from '../../../hooks/useLogout';

const Sidebar = () => {

    const [active, setActive] = useState("Nav");

    const [activeLink, setActiveLink] = useState("Home");

    const {logout} = useLogout();

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
            {/* <div id="loader" className="load">
                <hr/><hr/><hr/><hr/>
            </div> */}
            <nav className="sidebar">
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
                        {/* <li className="search-box" onClick={searchClick}>
                            <i className='bx bx-search icon'></i>
                            <input type="text" placeholder="Search..." />
                        </li> */}

                        <li className={`nav-link ${activeLink === "Home" ? "sidebar-active" : ""}`} onClick={() => setActiveLink("Home")}>
                            <a onClick={() => setActive("Nav")}>
                                <i className='bx bx-home icon'></i>
                                <span className="text nav-text">Home</span>
                            </a>
                        </li>

                        <li className={`nav-link ${activeLink === "Videos" ? "sidebar-active" : ""}`} onClick={() => setActiveLink("Videos")}>
                            <a onClick={() => setActive("VideosNav")}>
                                <i className='bx bxs-videos icon'></i>
                                <span className="text nav-text">Videos</span>
                            </a>
                        </li>

                        <li className={`nav-link ${activeLink === "Todo" ? "sidebar-active" : ""}`} onClick={() => setActiveLink("Todo")}>
                            <a onClick={() => setActive("CollegeTodo")}>
                                <i className='bx bx-list-check icon'></i>
                                <span className="text nav-text">Todo List</span>
                            </a>
                        </li>

                        <li className={`nav-link ${activeLink === "Fav" ? "sidebar-active" : ""}`} onClick={() => setActiveLink("Fav")}>
                            <a onClick={() => setActive("Fav")}>
                                <i className='bx bx-star icon'></i>
                                <span className="text nav-text">Favourite Tiles</span>
                            </a>    
                        </li>

                        <li className={`nav-link ${activeLink === "Custom" ? "sidebar-active" : ""}`} onClick={() => setActiveLink("Custom")}>
                            <a onClick={() => setActive("Custom")}>
                                <i className='bx bxs-add-to-queue icon'></i>
                                <span className="text nav-text">Custom Tiles</span>
                            </a>
                        </li>
                    
                </div>
                <div className="bottom-content">
                    <li className={`nav-link ${activeLink === "Profile" ? "sidebar-active" : ""}`} onClick={() => setActiveLink("Profile")}>
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

            {active === "Nav" && <Mainnav />}
            {active === "VideosNav" && <VideoNav />}
            {active === "CollegeTodo" && <Todo />}
            {active === "Custom" && <CustomTile/>}
            {active === "Fav" && <FavTile/>}
            {active === "Profile" && <Profile/>}
        </div>
    )
}

export default Sidebar;