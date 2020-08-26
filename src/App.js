import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './Post';
import { db, auth } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button, Input} from '@material-ui/core';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  // useEffect - Runs a piece of code based on a specific condition
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id : doc.id,
        post : doc.data()
      })));
    })
  }, []);

  const signUp = (event) => {
      event.preventDefault();
      auth.createUserWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
  }

  return (
    <div className="App">

      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
        <form className = "app__signUp">
           <center>
             <img
              className = "app__headerImage"
              src = "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt = "Instagram"
             />
           </center>
           <Input
              placeholder = "username"
              type = "password"
              value = {username}
              onChange = {(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder = "email"
              type = "text"
              value = {email}
              onChange = {(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder = "password"
              type = "password"
              value = {password}
              onChange = {(e) => setEmail(e.target.value)}
            />
            <Button type = "submit" onClick = {signUp}>Sign Up</Button>
        </form>



        </div>
      </Modal>

      <div className = "app__header">
        <img
          className = "app__headerImage"
          src = "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt = "Instagram"
        />
      </div>

      <Button onClick = {() => setOpen(true)}>signUp</Button>

      {
        posts.map(({id, post}) => (
          <Post key = {id} username = {post.username} caption = {post.caption} imageURL = {post.imageURL}/>
        ))
      }

    </div>
  );
}

export default App;
