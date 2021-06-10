import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import cookies from '../Cookies';
import { Redirect } from 'react-router';

Modal.setAppElement('#root')
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


  function requestAStall() {
    

  }


  let [modalState, setmodalState] = useState(false)

  return (
    <div className="profile-container">

      {/* ..................Displaying User Info....................................... */}

      <div className="profile-image">
        <image src=""></image>
      </div>

      <div className="user-info">
        <h2>{}</h2>
      </div>

      <div className="user-stalls">
        
      </div>


      <div className="request-a-stall">
        <button onClick={() => setmodalState(true)}> Request A Stall</button>
      </div>
      {/* ...................Displaying User Info....................................... */}

     {/* ..................Requesting a Stall (pop up form)....................................... */}
      <div className="stall-modal">

        <Modal 
          isOpen={modalState} 
          onRequestClose={() => setmodalState(false)} 
          style={
            { overlay: {backgroundColor: 'grey'} }
          }>
          <input type="text" placeholder="Enter Stall Name"/> <br /><br />
          
          <select>
            <option default>Select an appropriate section</option>
            
            <option value="antiques">Antiques</option>
            <option value="carpets_and_rugs">Carpets and Rugs</option>
            <option value="ceramics">Ceramics</option>
            <option value="clothes">Clothes</option>
            <option value="furnitures">Furnitures</option>
            <option value="home_decor">Home Decor</option>
            <option value="jewellery">Jewellery</option>

          </select> <br /><br /><br />
          
          <h4> List Items For Sale</h4>
          <input type="text" placeholder="Enter Item Name"/> <br /><br />
          £ <input type="text" placeholder="Set Item Price"/> <br /><br />
          <textarea placeholder="Enter Item Description" /> <br />

          <input type="submit" value="Submit" />
        </Modal>

      </div>
      
      {/* ..................Requesting a Stall (pop up form)....................................... */}
    
    </div>
  )
}

export default UserProfilePage
