import { useState } from 'react'
import './App.css'

function signUp() {

  return (
    <>
     <body>

        <form name ="SignUp" action="SignUpForm" method="POST">
            <label> Username: </label> <input type ="text" name ="username"/>
            <br />
            <label> Password: </label><input type ="text" name ="password"/>
            <br />

            <a href ="signUpButton">
                <input type ="submit" value ="Sign Up"/>
            </a>
        </form>
        <br /> 
        <a href ="BackButton" class = "abutton">
            <button>Back</button>
        </a>
    </body>
    </>
  )
}

export default App
