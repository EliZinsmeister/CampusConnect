import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function logIn() {

  return (
    
    <div>

      <form name ="LogIn" action="LogInForm" method="POST">
          <label>Username: </label><input type ="text" name ="username"/>
          <br />
          <label>Password: </label><input type ="text" name ="password"/>
          <br />
          <input type = "submit" value ="Log In"/>
      </form>
      <br />
      <a href ="BackButton" className="abutton">
          <button>Back</button>
      </a>
    </div>
    
  )
}

export default App
