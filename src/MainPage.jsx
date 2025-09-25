import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MainPage() {

  return (
    <>
      <title>Sign Up/Log In </title>
      <link rel="stylesheet" href="css.css" />

      <body>
        <h1>Sign Up or Log In</h1>
        <table>
          <tr>
            <td>
              <a href="SignUp">
                <button>Sign Up</button>
              </a>

              <br></br>
            </td>
            <td>
              <a href="LogIn">
                <button>Log In</button>
              </a>
            </td>
          </tr>
        </table>
      </body>
    </>
  )
}

export default App
