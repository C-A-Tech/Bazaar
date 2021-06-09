import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import SignIn from './SignIn'

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
