import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../../../../images/logo2.svg';
import Todo from './Todo';
import TodoForm from './TodoForm';

const CollegeTodo = () => {

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

    const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

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
        
        {/* COLLEGE TODO */}
        <div className='CollegeTodo'>
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    </div>

    
  )
}

export default CollegeTodo;