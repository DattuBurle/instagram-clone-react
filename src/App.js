import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <div className = "app__header">
        <img
          className = "app__headerImage"
          src = "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt = "Instagram"
        />
      </div>

      <Post username = "Dattu Burle" caption = "U r doing great JOB" imageURL ="https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg.webp"/>
      <Post username = "Uday Agarwal" caption = "U r doing great JOB" imageURL = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"/>
      <Post username = "Rishabh Yadhav" caption = "U r doing great JOB" imageURL = "https://www.teahub.io/photos/full/0-1188_beautiful-wallpaper-iphone.jpg"/>

    </div>
  );
}

export default App;
