import React, { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  ListItem,
  List,
} from "@material-ui/core";
// import SweetAlert from 'sweetalert-react';

import {
  uniqueNamesGenerator,
  adjectives,
  colors,
} from "unique-names-generator";
import "./App.css";
import firebase from "firebase";
import Todo from "./Todo";
import db from "./firebase";

const shortid = require("shortid");

const customConfig = {
  dictionaries: [adjectives, colors],
  separator: "-",
  length: 2,
};

const shortName = uniqueNamesGenerator(customConfig); // big-donkey

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [joinId, setjoinId] = useState("");
  const [id, setId] = useState();
  const [groupName, setGroupName] = useState();
  const [name, setName] = useState("");
  const [allGroups, setAllGroups] = useState([]);
  const [myGroups, setMyGroups] = useState([]);

  function joinGroup(event) {
    event.preventDefault();
    db.collection("groups")
      .doc(joinId)
      .get()
      .then((group) => {
        if (group.data()) {
          const { name } = group.data();
          setGroupName(name);
          setId(joinId);
          if (localStorage.getItem("groups")) {
            let myGroups = localStorage.getItem("groups");
            myGroups = JSON.parse(myGroups);
            const group = { id: joinId, name };

            const alreadyPresent = myGroups.find(
              (local) => local.id === group.id
            );
            if (!alreadyPresent) {
              myGroups.push(group);
              setAllGroups(myGroups);
              localStorage.setItem("groups", JSON.stringify(myGroups));
            }
          } else {
            const myGroups = [];
            const group = { id: joinId, name: groupName };
            const alreadyPresent = myGroups.find(
              (local) => local.id === group.id
            );
            if (!alreadyPresent) {
              myGroups.push(group);
              setAllGroups(myGroups);
              localStorage.setItem("groups", JSON.stringify(myGroups));
            }
          }
        }
      });

    setjoinId("");
  }

  const launchExistingGroup = (id) => {
    db.collection("groups")
      .doc(id)
      .get()
      .then((group) => {
        if (group.data()) {
          setId(id);
          setGroupName(group.data().name);
        } else {
          let myGroups = localStorage.getItem("groups");
          myGroups = JSON.parse(myGroups);
          myGroups = myGroups.filter((local) => local.id !== id);
          setAllGroups(myGroups);
          localStorage.setItem("groups", JSON.stringify(myGroups));

          return <>{alert("OOps! Group Deleted by creater")}</>;
        }
      });
  };

  const back = () => {
    setId();
  };

  const isMyGroup = (id) => {
    if (localStorage.getItem("myGroups")) {
      let myGroups = localStorage.getItem("myGroups");
      myGroups = JSON.parse(myGroups);
      myGroups = myGroups.find((group) => group.id === id);
      return !!myGroups;
    }
    return false;
  };

  const removeGroup = (id) => {
    let myGroups = localStorage.getItem("groups");
    myGroups = JSON.parse(myGroups);
    myGroups = myGroups.filter((local) => local.id !== id);
    setAllGroups(myGroups);
    localStorage.setItem("groups", JSON.stringify(myGroups));
  };

  const deleteGroup = (id) => {
    db.collection(`groups`).doc(id).delete();

    let myGroups = localStorage.getItem("groups");
    myGroups = JSON.parse(myGroups);
    myGroups = myGroups.filter((local) => local.id !== id);
    setAllGroups(myGroups);
    localStorage.setItem("groups", JSON.stringify(myGroups));

    if (localStorage.getItem("myGroups")) {
      let myGroups = localStorage.getItem("myGroups");
      myGroups = JSON.parse(myGroups);
      myGroups = myGroups.filter((local) => local.id !== id);
      setMyGroups(myGroups);
      localStorage.setItem("myGroups", JSON.stringify(myGroups));
    }
  };

  const createGroup = (event) => {
    event.preventDefault();
    const id = shortid.generate();
    setId(id);
    db.collection("groups").doc(id).set({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      name,
    });

    if (localStorage.getItem("groups")) {
      let myGroups = localStorage.getItem("groups");
      myGroups = JSON.parse(myGroups);
      const group = { id, name };
      myGroups.push(group);
      setAllGroups(myGroups);
      localStorage.setItem("groups", JSON.stringify(myGroups));
    } else {
      const myGroups = [];
      const group = { id, name };
      myGroups.push(group);
      setAllGroups(myGroups);
      localStorage.setItem("groups", JSON.stringify(myGroups));
    }

    if (localStorage.getItem("myGroups")) {
      let myGroups = localStorage.getItem("myGroups");
      myGroups = JSON.parse(myGroups);
      const group = { id, name };
      myGroups.push(group);
      setMyGroups(myGroups);
      localStorage.setItem("myGroups", JSON.stringify(myGroups));
    } else {
      const myGroups = [];
      const group = { id, name };
      myGroups.push(group);
      setMyGroups(myGroups);
      localStorage.setItem("myGroups", JSON.stringify(myGroups));
    }

    setGroupName(name);
    setName("");
  };

  useEffect(() => {
    let groups = localStorage.getItem("groups");
    if (groups) {
      groups = JSON.parse(groups);
      setAllGroups(groups);
    }
  }, []);

  useEffect(() => {
    if (id) {
      db.collection("groups")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setTodos(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              todo: doc.data().todo,
              name: doc.data().name,
            }))
          );
        });
    }
  }, [id]);

  // This will fire off when we click the button
  const addTodo = (event) => {
    event.preventDefault();

    if (!localStorage.getItem("uniqueName")) {
      localStorage.setItem("uniqueName", shortName);
    }

    db.collection(`groups`)
      .doc(id)
      .collection("messages")
      .add({
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        name: localStorage.getItem("uniqueName"),
      })
      .then((newTodo) => {
        // Add to localStorage
        if (localStorage.getItem("mytodos")) {
          const oldTodos = localStorage.getItem("mytodos");
          localStorage.setItem("mytodos", `${oldTodos},${newTodo.id}`);
        } else {
          localStorage.setItem("mytodos", newTodo.id);
        }
      });
    setInput("");
  };

  return (
    <div className="App">
      <h1>
        Virtual Dancers
        <span role="img" aria-label="dancers">
          {" "}
          👯‍♂️🕺💃{" "}
        </span>
        Secret Messenger
      </h1>

      {!id && (
        <div className="group">
          <div className="join">
            <form>
              <FormControl>
                <InputLabel>
                  <span role="img" aria-label="tick">
                    {" "}
                    ✅{" "}
                  </span>{" "}
                  Enter Group Id
                </InputLabel>
                <Input
                  value={joinId}
                  onChange={(event) => setjoinId(event.target.value)}
                />
              </FormControl>
              <Button
                disabled={!joinId}
                type="submit"
                onClick={joinGroup}
                variant="contained"
                color="primary"
                className="join_group_btn"
              >
                Join Group
              </Button>
            </form>
          </div>
          <span className="or">OR</span>
          <div className="create">
            <form>
              <FormControl>
                <InputLabel>
                  <span role="img" aria-label="tick">
                    {" "}
                    ✅{" "}
                  </span>{" "}
                  Write Group Name
                </InputLabel>
                <Input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </FormControl>

              <Button
                disabled={!name}
                type="submit"
                onClick={createGroup}
                variant="contained"
                color="primary"
                className="add_message_btn"
              >
                Create Group
              </Button>
            </form>
          </div>
        </div>
      )}

      {!id && (
        <div className="groupNames">
          <div className="groupNames-text">Your Recent Groups :</div>

          <List className="todo__list">
            {allGroups.map((group, index) => {
              isMyGroup(group.id);
              return (
                <div>
                  <ListItem>
                    <Button
                      onClick={() => launchExistingGroup(group.id)}
                      variant="contained"
                      color="primary"
                      className="open_grp_btn"
                    >
                      {group.name}
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => removeGroup(group.id)}
                      className="remove_group"
                    >
                      Remove
                    </Button>
                    {isMyGroup(group.id) && (
                      <Button
                        variant="contained"
                        onClick={() => deleteGroup(group.id)}
                        className="delete_group"
                      >
                        <span role="img" aria-label="delete">
                          ❌
                        </span>{" "}
                      </Button>
                    )}
                  </ListItem>
                </div>
              );
            })}
          </List>
        </div>
      )}

      {id && (
        <div className="group-info">
          <div className="group-info-name">
            {" "}
            Name:
            {groupName} <br />{" "}
          </div>
          <div className="group-info-id">
            {" "}
            Id:
            {id} <br />{" "}
          </div>
        </div>
      )}

      {id && (
        <div className="back">
          <Button
            type="submit"
            onClick={back}
            variant="contained"
            color="primary"
            className="add_message_btn"
          >
            BACK
          </Button>
        </div>
      )}

      {id && (
        <form>
          <FormControl>
            <InputLabel>
              <span role="img" aria-label="tick">
                {" "}
                ✅{" "}
              </span>{" "}
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
      )}

      {id && (
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} groupId={id} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
