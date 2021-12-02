import React, { useState } from 'react'
import './App.scss'

function App() {

  const [passwordIsVisible, setPasswordIsVisible] = useState(false)

  return (
    <div className="cool">
      <h1>Password Validator</h1>

      <input type={passwordIsVisible ? 'text' : 'password'} placeholder="Please enter your password" />
      <button type="button" onClick={() => setPasswordIsVisible((prevState) => !prevState)}>
        {passwordIsVisible ? 'Hide' : 'Show'}
      </button>

      <ul>
        <li>One lowercase letter</li>
        <li>One uppercase letter</li>
        <li>One special character</li>
        <li>One number</li>
        <li>Minimum 8 characters</li>
      </ul>
    </div>
  )
}

export default App
