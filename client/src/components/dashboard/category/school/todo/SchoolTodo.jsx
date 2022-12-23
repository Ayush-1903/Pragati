import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../../../../images/logo2.svg';

const Chat = () => {

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
                        <NavLink to = "/school-dashboard">
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
                        <NavLink to="/school-todo">
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

        <div class="all-tasks">
            <h2 class="task-list-title">My lists</h2>
            <ul class="task-list">
                <li class="list-name active-list">Youtube</li>
                <li class="list-name">Work</li>
                <li class="list-name">Grocery</li>
            </ul>

            <form action="">
                <input 
                type="text"
                class="new list"
                placeholder="new list name"
                aria-label="new list name"
                />
                <button class="btn create" aria-label="create new list">+</button>
            </form>
        </div>

        <div class="todo-list">
            <div class="todo-header">
                <h2 class="list-title">YouTube</h2>
                <p class="task-count">3 tasks remaining</p>
            </div>

        <div class="todo-body">
            <div class="tasks">
            <div class="task">
                <input 
                type="checkbox"
                id="task-1"
                />
                <label for="task-1">
                <span class="custom-checkbox"></span>
                record todo list video
                </label>
            </div>

            <div class="task">
                <input 
                    type="checkbox"
                    id="task-2"
                />
                <label for="task-2">
                    <span class="custom-checkbox"></span>
                    another task
                </label>
                </div>

                <div class="task">
                    <input 
                    type="checkbox"
                    id="task-3"
                    />
                    <label for="task-3">
                    <span class="custom-checkbox"></span>
                    a third task
                    </label>
                </div>
            </div>

            <div class="new-task-creator">
                <form action="">
                    <input 
                    type="text"
                    class="new task"
                    placeholder="new task name"
                    aria-label="new task name"
                    />
                    <button class="btn create" aria-label="create new task">+</button>
                </form>
            </div>

            <div class="delete-stuff">
            <button class="btn delete">Clear completed tasks</button>
            <button class="btn delete">Delete list</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Chat