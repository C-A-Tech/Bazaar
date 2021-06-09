import {Link } from "react-router-dom";


function LandingPage() {
  
  return (
    <div className="main-container">
  
    <div className="signin">
      <Link to="/signin">Sign In</Link>
    </div>
    
    <div className="signup">
      <Link to="/signup">Sign Up</Link>
    </div>


    </div>
  )
}

export default LandingPage
