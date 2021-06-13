import {Link } from "react-router-dom";
import {motion} from "framer-motion"
import './LandingPage.css'
import logo from './src/logo.png'

function LandingPage() {
  
  return (
    <div className="LandingPage" >
      <div className="logo">
        <img src={logo}></img>
      </div>
      <br />
      <div className="signup-in">
        <Link to="/signin" className="signin"><button>Sign In</button></Link>
  
        <Link to="/signup" className="signup"><button>Sign Up</button></Link>
      </div>


    </div>
  )
}

export default LandingPage
