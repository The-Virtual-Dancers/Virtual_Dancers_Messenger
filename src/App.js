import React, {useState, useEffect} from 'react';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core'
import './App.css';
import Todo from './Todo'
import db from './firebase'
import firebase from 'firebase';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, [])

  //This will fire off when we click the button
  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  return (
    <div className="App">
      <h1>Virtual Dancers 👯‍♂️🕺💃 Secret Messenger</h1>
      <form>
      <FormControl>
        <InputLabel>✅ Write a Message</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>

      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary" >Add Message</Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </ul>

    </div>
  );
}

export default App;
