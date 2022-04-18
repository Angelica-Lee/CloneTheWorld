import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import {useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reduce';

function Search() {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function handleMouseEnter (e) {
    e.target.style.outlineWidth = 0;
  }

  function handleSubmit (e){
    e.preventDefault();
    
    dispatch({
      type:actionTypes.SET_SEARCH_TERM,
      term:input,
    })
    navigate("/search")
    setInput('');
  }

  console.log(input);
  return (
    <form style={style.container} onSubmit={handleSubmit}>
      <SearchIcon style={{color:"gray"}}/>
      <input style={style.input} value={input} onMouseEnter={handleMouseEnter} onChange={e => setInput(e.target.value)}/>
      <KeyboardVoiceIcon />
    </form>
  );
}

const style = {
  container:{
    display: "flex",
    border: "1px solid lightGray",
    height: 30,
    width:"75vw",
    margin: "0 auto",
    justifyContent:"flex-start",
    alignItems:"center",
    borderRadius: 50,
    marginTop:10,
    padding:"5px 20px"
  },
  input:{
    flex:1,
    fontSize: 20,
    height:30,
    border:"none",
    marginLeft:10
  },

};


export default Search;