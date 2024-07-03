import React,{useContext} from 'react'
import '../Styles/Auth.css'
import { auth, provider } from '../config/firebase-config'
import { signInWithPopup } from 'firebase/auth'

import  UserContext  from '../context/UserContext'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

const Auth = (props) => {
  const { setIsAuth } = props

  const { setUser } = useContext(UserContext);
  const [photoURL, setPhotoURL] = useState('');
  const [displayName, setDisplayName] = useState('');


  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set('authToken', result.user.refreshToken);
      setIsAuth(true);
      console.log("result")
      console.log(result)
    } catch (err) {
      console.log(err.message)
    }
  }
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to ChatApp</h1>
      </header>
      <main className="home-main">
        <section className="hero-section">
          <h2>Connect with friends and family instantly</h2>
          <p>Experience real-time messaging like never before</p>
          <button className="login-button" onClick={signInWithGoogle}>
            Sign in with Google
          </button>
        </section>
        <section className="features-section">
          <h3>Key Features</h3>
          <ul>
            <li>Real-time messaging</li>
            <li>Group chats</li>
            <li>File sharing</li>
            <li>End-to-end encryption</li>
          </ul>
        </section>
      </main>
      <footer className="home-footer">
        <p>&copy; 2024 ChatApp. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Auth
