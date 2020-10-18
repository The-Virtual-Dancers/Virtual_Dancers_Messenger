import { ListItemText, ListItem, List, Modal, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Todo.css";

import { makeStyles } from "@material-ui/core/styles";
import db from "./firebase";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const updateTodo = () => {
    db.collection(`groups`)
      .doc(props.groupId)
      .collection("messages")
      .doc(props.todo.id)
      .set(
        {
          todo: input,
        },
        { merge: true }
      );
    setOpen(false);
  };

  // check User (Browser)
  function isMyTodo(todo) {
    if (localStorage.getItem("mytodos")) {
      const mytodos = localStorage.getItem("mytodos").split(",");
      if (mytodos.includes(todo.id)) return true;
      return false;
    }
    return false;
  }

  // Delete todo
  function deleteTodo(id) {
    db.collection(`groups`)
      .doc(props.groupId)
      .collection("messages")
      .doc(id)
      .delete();
    const mytodos = localStorage.getItem("mytodos").split(",");
    mytodos.splice(mytodos.indexOf(id), 1);
    localStorage.setItem("mytodos", mytodos);
  }

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>Edit Your Message</h1>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button onClick={updateTodo}>Update Message</Button>
        </div>
      </Modal>
      <List className="todo__list">
        <ListItem>
          <ListItemText
            primary={props.todo.todo}
            secondary={`${props.todo.name} 👯‍♂️🕺💃`}
            className="todo__list__item"
          />
          {isMyTodo(db.collection("todos").doc(props.todo.id)) && (
            <Button
              variant="contained"
              onClick={(e) => setOpen(true)}
              className="todo__list__button"
            >
              Edit
            </Button>
          )}
          {isMyTodo(db.collection("todos").doc(props.todo.id)) && (
            <Button
              variant="contained"
              onClick={() => deleteTodo(props.todo.id)}
            >
              <span role="img" aria-label="delete">
                ❌
              </span>{" "}
            </Button>
          )}
        </ListItem>
      </List>
    </>
  );
}

export default Todo;
