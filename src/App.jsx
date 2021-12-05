import React, { useState } from 'react'

import PasswordValidator from './utils/PasswordValidator'

import PasswordValidatorStatusViewer from './PasswordValidatorStatusViewer'

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

      <PasswordValidatorStatusViewer validator={passwordValidator} />
    </>
  )
}

export default App
