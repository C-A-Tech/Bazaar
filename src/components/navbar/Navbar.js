import React from 'react';
import './Navbar.css'
import { Link } from "react-router-dom";
import logo from "./src/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

function Navbar(){
  return (
    <div>
    <nav className="Navbar">
      <div className="Navbar container">
        <img src={ logo } className="logo"></img>
        <div className="all-nav-buttons">
          <Link to="/home">
            <FontAwesomeIcon icon={faHome} className="nav-icons"/>
            <button className="nav-buttons"> Browse </button>
          </Link>
          <Link to="/my-stalls/:id">
            <FontAwesomeIcon icon={faStore} className="nav-icons"/>
            <button className="nav-buttons"> My Stalls </button>
          </Link>
          <Link to="/user/:id">
            <FontAwesomeIcon icon={faUserAlt} className="nav-icons"/>
            <button className="nav-buttons"> My Profile </button>
          </Link> 
          <Link to="/basket/:id">
            <FontAwesomeIcon icon={faShoppingBasket} className="nav-icons"/> 
            <button className="nav-buttons"> Basket </button>
          </Link>
        </div>
      </div>
    </nav>
    <div className="Mobile-top-header">
      <img src={ logo } className="logo"></img>
    </div>
    </div>
  )
}

export default Navbar