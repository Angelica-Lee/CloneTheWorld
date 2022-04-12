import './App.css';
import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import firebase from 'firebase/compat/app';
import { db } from './firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';

function App() {
  //useState:the temporary storage
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUserName] = useState('');


  useEffect(() => {
    setUserName(prompt("enter user name"))
  }, [])

  useEffect(() => {
    //load the data once the page is loaded
    //note:the snapshot here will include all the data of the collection
    //basically its an array of object  
    db.collection('messages').orderBy('timestamp', 'desc').
      onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      })
  }, [])

  console.log(messages);

  const sendMessage = (event) => {
    //the logic to send message 
    event.preventDefault();
    //the reason why we need to do this is:
    //form-submit will automatically refresh the page
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    //message is now object 
    //update the message
    setMessages([...messages, { username: username, message: input }]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>hello! Welcome to my messenger</h1>
      <form className='app__form'>
        {/* material ui has root css, it will cover our styles */}
        <FormControl className='app__formControl'>
          <Input className = 'app__input' placeholder='Enter the message' value={input} onChange={event => setInput(event.target.value)}></Input>
          <IconButton className = 'app__iconButton' disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
            <SendIcon />
          </IconButton>
          {/* when there is no input, disable the button */}
        </FormControl>
      </form>

      <FlipMove>
        {/* here, message is an object contains message, username, and timestamp */}
        {/* give all this message to Message component */}
        {
          messages.map(({ id, message }) => (
            <Message key={id} message={message} username={username} />
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
