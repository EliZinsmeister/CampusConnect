import './MainPage.css'

function MainPage() {
  return (
    <main className="main-container">
      {/* title/link tags don't belong in component body; keep content for display only */}
      <h1 className="title">Sign Up or Log In</h1>

      <div className="actions">
        <form name ="SignUp" action="SignUp" method="GET">
            <a href ="signUpButton">
                <input type ="submit" value ="Sign Up"/>
            </a>
        </form>
        
        <a href="LogIn">
          <button className="action-btn">Log In</button>
        </a>
      </div>
    </main>
  )
}

export default MainPage
