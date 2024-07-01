import React from 'react'
import {auth, provider} from '../config/firebase-config'
import { signInWithPopup } from 'firebase/auth'

import Cookies from 'universal-cookie'
const cookies = new Cookies()
const Auth = () => {

    const signInWithGoogle = async () =>{
        try{
        const result = await signInWithPopup(auth, provider);
        cookies.set('authToken', result.user.refreshToken)
        console.log("result")
        console.log(result)
        } catch (err) {
            console.log(err.message)
        }
    }
  return (
    <div className="auth">
      <p>Sign in with Google to Continue</p>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  )
}

export default Auth
