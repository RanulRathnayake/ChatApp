import { React, useState, useRef } from 'react';
import { signOut } from 'firebase/auth';
import { auth} from './config/firebase-config';
import './App.css';
import Auth from './Components/Auth.js'
import Home from './Components/Home.js'
import Chat from './Components/Chat.js'
import SignedOut from './Components/SignedOut.js'

import UserContext from './context/UserContext.js';

import Cookies from 'universal-cookie';
const cookies = new Cookies();
function App() {
  
  const handleSignOut = () => {
    signOut(auth);
    cookies.remove('authToken');
    setIsAuth(false);
  }
  const [isAuth, setIsAuth] = useState(cookies.get('authToken') !== undefined);//check the logic
  console.log(isAuth);
  const [room, setRoom] = useState('');
  console.log(room);
  /* const roomInputRef = useRef(null); */

  if (!isAuth) {
    return (
      <div className="App">
        <Auth setIsAuth={setIsAuth}/>
      </div>
    );
  }
  else {
    return (
      <div className="App2">
        {room ? (
          <Chat room={room}/>
        ) : (
          <Home setRoom={setRoom}/>
          
        )}
        <SignedOut handleSignOut={handleSignOut}/>
      </div>
    );
  }
}

export default App;
