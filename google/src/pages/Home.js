import React from 'react'
import './Home.css'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { Link } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../components/icon.jpeg'
import Search from '../components/Search';
import SearchIcon from '@mui/icons-material/Search';

function Home() {
  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home__left'>
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className='home__right'>
          <Link to="/store">Gmail</Link>
          <Link to="/store">Image</Link>
          <AppsIcon />
          <AccountCircleIcon />
        </div>
      </div>
      <div className='home__body' style={style.body}>
        <img src={logo} alt='' />
        <Search />
      </div>

    </div>
  );
}

const style = {
  body:{
    display:"flex",
    flexDirection:"column",
  },
}

export default Home