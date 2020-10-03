import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
            name: doc.data().name,
          }))
        );
      });
  }, []);

  //This will fire off when we click the button
  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      name: name,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
    setName('');
  };

  return (
    <div className="App">
      <h1>
        Virtual Dancers{' '}
        <span role="img" aria-label="emoji_dancers">
          👯‍♂️🕺💃
        </span>{' '}
        Secret Messenger
      </h1>
      <form className="dancerForm">
        <FormControl>
          <InputLabel>
            <span role="img" aria-label="emoji_ticked">
              🧔🏾
            </span>{' '}
            Your name
          </InputLabel>
          <Input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </FormControl>
        <FormControl>
          <InputLabel>
            <span role="img" aria-label="emoji_ticked">
              ✏️
            </span>{' '}
            Write a Message
          </InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
          className="add_message_btn"
        >
          Add Message
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
