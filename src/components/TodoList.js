import { List } from '@material-ui/core';
import React from 'react';
import Todo from './Todo'

function TodoList ({ todos, toggleComplete, removeTodo }) {
  // Renders a list of all todos under the forms inputfeild
  return (
    <List>
      { todos.map(todo => (
        <Todo 
          key={todo.id} 
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </List>
  );
}

export default TodoList;