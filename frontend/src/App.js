import React from 'react';
import './App.css';
import Auth from './Components/Auth.js'

import Cookies from 'universal-cookie';
const cookies = new Cookies();
function App() {
  const [isAuth, setIsAuth] = useState(cookies.get('authToken')/*  !== undefined */);//check the logic
  const [room, setRoom] = useState('');

  if (isAuth) {
    return (
      <div className="App">
        <Auth />
      </div>
    );
  }
  else {
    return (
      <div className="App2">
        {room ? <Chat room={room} /> : <Home setRoom={setRoom} /> }
      </div>
    );
  }
}

export default App;
