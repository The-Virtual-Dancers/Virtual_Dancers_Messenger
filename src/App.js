import React, {useState, useEffect} from 'react';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core'
import { uniqueNamesGenerator, adjectives, colors } from 'unique-names-generator';
import './App.css';
import Todo from './Todo'
import db from './firebase'
import firebase from 'firebase';

const customConfig = {
  dictionaries: [adjectives, colors],
  separator: '-',
  length: 2,
};

const shortName = uniqueNamesGenerator(customConfig); // big-donkey



function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo, name: doc.data().name})))
    })
  }, [])

  //This will fire off when we click the button
  const addTodo = (event) => {
    event.preventDefault();

    if(!localStorage.getItem('uniqueName')){
      localStorage.setItem('uniqueName', shortName)
    }
    

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      name: localStorage.getItem('uniqueName')
    }).then((newTodo)=>{

      // Add to localStorage 
      if(localStorage.getItem('mytodos')){
        let oldTodos = localStorage.getItem('mytodos')
        localStorage.setItem('mytodos',`${oldTodos},${newTodo.id}`)
      }
      else{
        localStorage.setItem('mytodos',newTodo.id)
      }

    })
    setInput('')
  }

  return (
    <div className="App">
      <h1>Virtual Dancers <span role="img" aria-label="dancers"> 👯‍♂️🕺💃 </span>Secret Messenger</h1>
      <form>
      <FormControl>
        <InputLabel><span role="img" aria-label="tick"> ✅ </span> Write a Message</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>

      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary" className="add_message_btn">Add Message</Button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo}/>
        ))}
      </ul>

    </div>
  );
}

export default App;
