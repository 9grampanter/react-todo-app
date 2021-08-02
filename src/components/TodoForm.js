import { Button, TextField } from '@material-ui/core';
import React, {useState} from 'react';
import uuid from 'react-uuid';

function TodoForm( {addTodo} ) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });

      // Reset task input
      setTodo({ ...todo, task: "" });
    };
  };

 return(
  <form className="todo-form" onSubmit={handleSubmit}>
    <TextField
      label="Task" 
      name="task"
      type="text"
      value={ todo.task }
      onChange={ handleTaskInputChange }
    />
    <Button 
      style={{height:'100%', background: '#D7837F'}}
      className="center-me"
      type="submit" > Submit Todo</Button>
  </form>
 );
}

export default TodoForm