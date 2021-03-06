import { Button, Checkbox, ListItem, Typography } from "@material-ui/core";
import React from "react"

function Todo({ todo, toggleComplete, removeTodo }) {

  // Functionallity to declate todo as completed
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }
  
  // Functionallity to remove a todo
  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <ListItem 
      className='todoItem'
    >
      <Checkbox 
        defaultChecked={todo.completed}
        onClick={handleCheckboxClick} 
      />
      <Typography 
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null,
          margin: '0 2rem',
        }}
      > {todo.task} </Typography>
      <Button 
      onClick={handleRemoveClick}
      style={{ background: '#D7837F', textAlign:'center' }}
      className="center-me"
      >X
      </Button>
    </ListItem>
  );
}

export default Todo