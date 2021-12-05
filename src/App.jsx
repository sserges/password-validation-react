import React, { useState } from 'react'

import PasswordValidator from './utils/PasswordValidator'

import './App.scss'

import openEye from './eye.svg'
import closedEye from './eye-off.svg'


function App() {

  const [password, setPassword] = useState('')
  const [passwordIsVisible, setPasswordIsVisible] = useState(false)

  const passwordValidator = new PasswordValidator(password)


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
        <li style={{ color: passwordValidator.hasLowerCaseLetter() ? 'green' : 'red' }}>One lowercase letter</li>
        <li style={{ color: passwordValidator.hasUpperCaseLetter() ? 'green' : 'red' }}>One uppercase letter</li>
        <li style={{ color: passwordValidator.hasSpecialCharacter() ? 'green' : 'red' }}>One special character</li>
        <li style={{ color: passwordValidator.hasDigit() ? 'green' : 'red' }}>One number</li>
        <li style={{ color: passwordValidator.hasValidLength() ? 'green' : 'red' }}>Minimum 8 characters</li>
      </ul>
    </>
  )
}

export default App
