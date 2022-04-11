import './App.css';
import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import firebase from 'firebase/compat/app';
import { collection, getDocs } from 'firebase/firestore/lite';
import db from './firebase';
import { onSnapshot, query} from 'firebase/firestore';

function App() {
  //useState:the temporary storage
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { username: 'a', message: 'hello' },
    { username: 'b', message: 'hey guys' },
    { username: 'c', message: 'whats up' },
  ]);
  const [username, setUserName] = useState('');


  useEffect(() => {
    setUserName(prompt("enter user name"))
  }, [])

  const getMessages = async (db) => {
    const messageCollection = query(collection(db, 'messages'));
    const messageSnapshot = await getDocs(messageCollection);
    const messageList = messageSnapshot.docs.map(doc => doc.data());
    return messageList;
  }

  useEffect((db) =>{
    //load the data once the page is loaded
    //note:the snapshot here will include all the data of the collection
    //basically its an array of object  
    const messageCollection = query(collection(db, 'messages'));
    onSnapshot(messageCollection, (querySnapshot) => {
      setMessages(querySnapshot.docs.map((doc) => (doc.data)));
    }) 
  },[])

  console.log(messages);

  const sendMessage = (event) => {
    //the logic to send message 
    event.preventDefault();
    //the reason why we need to do this is:
    //form-submit will automatically refresh the page
    db.collection('messages').add({
      messages:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    //message is now object 
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
      {/* {
        messages.map(message => (
          <Message message={message} username={username} />
        ))
      } */}
    </div>
  );
}

export default App;
