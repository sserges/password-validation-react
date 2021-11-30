import React, { useState } from 'react'
import classes from './App.module.css'

function App() {
  return (
    <>
      <h1 className={`${classes.momo} ${classes.small}`}>Password Validator</h1>

      <input type="password" placeholder="Please enter your password" />
      <button>Show</button>

      <ul className={classes.small}>
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
