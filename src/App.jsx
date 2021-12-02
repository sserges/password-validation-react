import React, { useState } from 'react'
import './App.scss'

import openEye from './eye.svg'
import closedEye from './eye-off.svg'

function App() {

  const [passwordIsVisible, setPasswordIsVisible] = useState(false)

  return (
    <>
      <h1>Password Validator</h1>

      <input type={passwordIsVisible ? 'text' : 'password'} placeholder="Please enter your password" />
      <span onClick={() => setPasswordIsVisible((prevState) => !prevState)}>
        <img src={passwordIsVisible ? closedEye : openEye} alt={passwordIsVisible ? 'Closed Eye' : 'open Eye'} width="32" />
      </span>

      <ul>
        <li>One lowercase letter</li>
        <li>One uppercase letter</li>
        <li>One special character</li>
        <li>One number</li>
        <li>Minimum 8 characters</li>
      </ul>
    </>
  )
}

export default App
