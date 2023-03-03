import React, {useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const CollegeTodo = () => {

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
        <div className='clg-todo'>
            <div className='CollegeTodo todo-app' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
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