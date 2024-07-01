import React from 'react'

const SignedOut = (props) => {

    const {handleSignOut} = props

    return (
    <div>
      <button
      onClick={handleSignOut}>
        SignedOut
      </button>
    </div>
  )
}

export default SignedOut
