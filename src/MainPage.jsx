import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './MainPage.css'

function MainPage() {

  return (
    <>

      <div class="center">
        <title>Sign Up/Log In </title>
        <link rel="stylesheet" href="css.css" />


        <h1 class="center">Sign Up or Log In</h1>



        <a href="SignUp" class="center">
          <button class="center">Sign Up</button>
        </a>

        <br></br>


        <a href="LogIn" class="center">
          <button class="center">Log In</button>
        </a>
      </div>

    </>
  )
}

export default MainPage
