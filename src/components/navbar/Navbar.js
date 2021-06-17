import React from 'react';
import './Navbar.css'
import { Link } from "react-router-dom";
import logo from "./src/logo.png"
import background from "./src/background.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import LogOut from '../LogOut/LogOut';
import  { LogOutButton } from '../LogOut/LogOut';

function Navbar(){
  return (
    <div>
    <nav className="Navbar" style={{ backgroundImage: `url(${background})` }}>
      <div className="Navbar container" >
        <img src={ logo } className="logo"></img>
        <div className="all-nav-buttons">
          <Link to="/home" className="link">
            <FontAwesomeIcon icon={faHome} className="nav-icons"/>
            <button className="nav-buttons"> Browse </button>
          </Link>
          <Link to="/my-stalls/{id}" className="link">
            <FontAwesomeIcon icon={faStore} className="nav-icons"/>
            <button className="nav-buttons"> My Stall </button>
          </Link>

          <Link to="/basket/:id" className="link">
            <FontAwesomeIcon icon={faShoppingBasket} className="nav-icons"/> 
            <button className="nav-buttons"> Basket </button>
          </Link>
          <div>
            <div className="nav-icons component">
              <LogOut/>
            </div>
            <div className="nav-buttons">
              <LogOutButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div className="Mobile-top-header" style={{ backgroundImage: `url(${background})` }}>
      <img src={ logo } className="logo"></img>
    </div>
    </div>
  )
}

export default Navbar
// 