import './App.css';
import React, { useState, useEffect } from 'react';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { Typography } from '@material-ui/core';

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);

  // Gets locally stored Todos and renders them if any exsists
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  // Saves Todos to localStorage 
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // Adds new todo to todoList
  function addTodo(todo) {
    setTodos([ todo, ...todos ]);
  };

  // Check for toggled todo by checking id's and then sending the toggle down as a prop to the checked todo.
  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  // Checking id's for the clicked todo that is going to be removed and then sending the clicked todo down as a prop.
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // Rendering the base of the app and sending the correct props
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1" >React Todo</Typography>
        <TodoForm addTodo={addTodo} />
        <TodoList 
          todos={todos} 
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}   
        />
      </header>
    </div>
  );
}

export default App;
