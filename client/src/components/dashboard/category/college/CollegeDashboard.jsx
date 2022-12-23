import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../../images/logo2.svg';
import PRACTICETiles from "./practice/PRACTICETiles";
import DSATiles from "./learn/dsa/DSATiles";
import WEBTiles from "./learn/web/WEBTiles";
import DATATiles from "./learn/datascience/DATATiles";
import PlacementTiles from "./placement/PlacementTiles";
import FreelanceTiles from "./freelance/FreelanceTiles";
import StudyTiles from "./study/StudyTile";
import '../../Dashboard.scss';

const Sidebar = () => {

    const [active, setActive] = useState("MainTile");
  
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

    const navLink = document.querySelectorAll("li");

    navLink.forEach(element => {
        element.addEventListener("click", function() {
            navLink.forEach(a=>a.classList.remove("active-link"))

            this.classList.add("active-link");
        })
    })

  return (
    <div className='sidebar-main'>
        <nav className="sidebar close">
          <header>
              <div className="image-text">
                  <span className="image">
                      <img src={logo} alt="" />
                  </span>

                  <div className="text logo-text">
                      <span className="name">SubKeeper</span>
                      <span className="profession">Organize</span>
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

                {/* <ul className="menu-links"> */}
                    <li className="nav-link active">
                        <NavLink to = "/college-dashboard">
                            <i className='bx bx-home-alt icon' ></i>
                            <span className="text nav-text">Dashboard</span>
                        </NavLink>
                    </li>

                    <li className="nav-link">
                        <NavLink to="chat">
                            <i class='bx bx-message-dots icon'></i>
                            <span className="text nav-text">Chat</span>
                        </NavLink>
                    </li>

                    <li className="nav-link">
                        <NavLink to="/college-todo">
                            <i class='bx bx-list-check icon'></i>
                            <span className="text nav-text">Todo List</span>
                        </NavLink>
                    </li>

                    <li className="nav-link">
                        <NavLink to="analytics">
                            <i className='bx bx-pie-chart-alt icon' ></i>
                            <span className="text nav-text">Analytics</span>
                        </NavLink>
                    </li>

                {/* </ul> */}
                
              </div>
              <div className="bottom-content">
                <li className="">
                    <NavLink to="profile">
                        <i class='bx bxs-user icon'></i>
                        <span className="text nav-text">Profile</span>
                    </NavLink>
                </li>

                <li className="">
                    <a href="#">
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

        <div className="navleft">
            <ul>
                <li><a>Learn <i className="fa fa-solid fa-caret-down"></i></a>
                    <ul className="drop-link">
                        <li className="sub-link"><a onClick={() => setActive("DSATile")}>Data Structures</a></li>
                        <li className="sub-link"><a onClick={() => setActive("WEBTile")}>Web Development</a></li>
                        <li className="sub-link"><a onClick={() => setActive("DATATile")}>Data Science & ML</a></li>
                    </ul>
                </li>
                <li className="active-link"><a onClick={() => setActive("MainTile")}>Practice</a></li>
                <li><a onClick={() => setActive("PlacementTile")}>Internship/Placement</a></li>
                <li><a onClick={() => setActive("FreelanceTile")} >Freelancing</a></li>
                <li><a onClick={() => setActive("StudyTile")} >Higher Study</a></li>
            </ul>
        </div>
        {active === "MainTile" && <PRACTICETiles />}
        {active === "DSATile" && <DSATiles />}
        {active === "WEBTile" && <WEBTiles />}
        {active === "DATATile" && <DATATiles />}
        {active === "PlacementTile" && <PlacementTiles />}
        {active === "FreelanceTile" && <FreelanceTiles />}
        {active === "StudyTile" && <StudyTiles />}
    </div>
  )
}

export default Sidebar;