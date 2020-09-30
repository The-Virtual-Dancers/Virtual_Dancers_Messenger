import { ListItemAvatar, ListItemText } from '@material-ui/core'
import React ,{useState}from 'react'
import './Todo.css'
import {ListItem, List, Modal, Button} from '@material-ui/core'
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=> ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3)
    }
}))

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge:true});

        setOpen(false);

    }

    return (
        <>
        <Modal open = {open} onClose={e =>  setOpen(false)}>
            <div className={classes.paper}>
                <h1>Edit Your Message</h1>
                <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}></input>
                <Button onClick={updateTodo}>Update Message</Button>
            </div>
        </Modal>
        <List className="todo__list">
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary="Virtual Dancers 👯‍♂️🕺💃" className="todo__list__item"/>
                <Button variant="contained" onClick={e => setOpen(true)} className="todo__list__button">Edit</Button>
                <Button variant="contained" onClick={event => db.collection('todos').doc(props.todo.id).delete()}>❌</Button>
            </ListItem>
            
        </List>
        </>
    )
}

export default Todo
