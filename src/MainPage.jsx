import './MainPage.css'

function MainPage() {
  return (
    <main className="main-container">
      {/* title/link tags don't belong in component body; keep content for display only */}
      <h1 className="title">Sign Up or Log In</h1>

      <div className="actions">
        <a href="SignUp">
          <button className="action-btn">Sign Up</button>
        </a>

        <a href="LogIn">
          <button className="action-btn">Log In</button>
        </a>
      </div>
    </main>
  )
}

export default MainPage
