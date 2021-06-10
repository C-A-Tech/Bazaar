import React from 'react';
import './index.css'
import {Link } from "react-router-dom";

function Navbar(){
  return (
    <div className="Navbar">
      <Link to="/"><button> Home</button></Link>
      <Link to="/sections"><button> Sections </button></Link>
      <Link to="/"><button> My profile </button></Link>
    </div>
  )
}

export default Navbar