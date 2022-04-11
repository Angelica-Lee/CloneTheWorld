import './App.css';
import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import firebase from 'firebase/compat/app';
import {db} from './firebase';

function App() {
  //useState:the temporary storage
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUserName] = useState('');


  useEffect(() => {
    setUserName(prompt("enter user name"))
  }, [])

  useEffect(() =>{
    //load the data once the page is loaded
    //note:the snapshot here will include all the data of the collection
    //basically its an array of object  
    db.collection('messages').onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  },[])

  console.log(messages);

  const sendMessage = (event) => {
    //the logic to send message 
    event.preventDefault();
    //the reason why we need to do this is:
    //form-submit will automatically refresh the page
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    //message is now object 
    //update the message
    setMessages([...messages, { username: username, message: input }]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>hello</h1>
      <form>
        <FormControl>
          <InputLabel>Enter the message</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}></Input>
          <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>send</Button>
          {/* when there is no input, disable the button */}
        </FormControl>
      </form>

      {/* message themselves */}
      {
        messages.map(message => (
          <Message message={message} username={username} />
        ))
      }
    </div>
  );
}

export default App;
