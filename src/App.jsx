import React, { useState } from 'react'
import './App.scss'

import openEye from './eye.svg'
import closedEye from './eye-off.svg'

function App() {

  const [password, setPassword] = useState('')
  const [passwordIsVisible, setPasswordIsVisible] = useState(false)

  // Password validations
  const passwordHasValidLength = password.length >= 8
  const passwordHasLowercaseLetter = /[a-z]/.test(password)
  const passwordHasUppercaseLetter = /[A-Z]/.test(password)
  const passwordHasSpecialCharacter = /[!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?]/.test(password)
  const passwordHasNumber = /[0-9]/.test(password)

  return (
    <>
      <h1>Password Validator</h1>

      <input
        type={passwordIsVisible ? 'text' : 'password'}
        placeholder="Please enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <span onClick={() => setPasswordIsVisible((prevState) => !prevState)}>
        <img src={passwordIsVisible ? closedEye : openEye} alt={passwordIsVisible ? 'Closed Eye' : 'open Eye'} width="32" />
      </span>

      <ul>
        <li style={{ color: passwordHasLowercaseLetter ? 'green' : 'red' }}>One lowercase letter</li>
        <li style={{ color: passwordHasUppercaseLetter ? 'green' : 'red' }}>One uppercase letter</li>
        <li style={{ color: passwordHasSpecialCharacter ? 'green' : 'red' }}>One special character</li>
        <li style={{ color: passwordHasNumber ? 'green' : 'red' }}>One number</li>
        <li style={{ color: passwordHasValidLength ? 'green' : 'red' }}>Minimum 8 characters</li>
      </ul>
    </>
  )
}

export default App
