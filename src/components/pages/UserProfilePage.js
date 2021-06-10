import React, { useState } from 'react';
import axios from 'axios';
import cookies from '../Cookies';
import { Redirect } from 'react-router';

function UserProfilePage() {
  let id;
  let first_name;
  let last_name
  let email;
  let dob;

  const findUser = async (callback) => {
  
      return await axios
        .get('https://bazaar-server.herokuapp.com/api/users')
        .then((res) => res.data)
        .then( (data) =>  { callback(data) } )
  };

  const getUsers = () => {
    return findUser((element) =>{ element.forEach(user => user.first_name)
    })
  }


  function requestAStall(event){
    console.log('inside the requestAStall function')
    return <Redirect to="/user/:id/request-a-stall" />

  }

  return (
    <div className="profile-container">
      
      <div className="profile-image">
        <image src=""></image>
      </div>

      <div className="user-info">
        <h2>{}</h2>
      </div>

      <div className="user-stalls">
        
      </div>


      <div className="request-a-stall">
        <form onSubmit={requestAStall()}>
          <input type="submit" value= "Request A Stall" />
        </form>
      </div>
          
    
    </div>
  )
}

export default UserProfilePage
