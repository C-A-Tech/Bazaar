import React, {useState} from 'react';
import Modal from 'react-modal';
import { FaTimes, FaPlus } from 'react-icons/fa';
import axios from 'axios';
import Cookies from 'universal-cookie';
import addNotification from '../../notices/notice';
import { Redirect } from 'react-router';



Modal.setAppElement('#root')

function RequestStall(props) {
  const [modalState, setmodalState] = useState(false);
  const [newStall, setNewStall] = useState({});
  const [redirect, setRedirect] = useState(false);
  const cookies = new Cookies

  const signedInUser = cookies.get('user')
  const user = signedInUser._id

  const printErrors = (msg) => {
		msg.forEach((element) => {
			addNotification(element.msg, 'danger');
		});
	};

	const createStall = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    formData.set('user', `${user}`);
    formData.set('name', formData.get('name'));
    formData.set('section', formData.get('section'));
    formData.set('image', formData.get('image'));

    for( var pair of formData.entries() ){
      console.log(pair[0]+ ', '+ pair[1])
    }

    const config = {     
      headers: { 'content-type': 'multipart/form-data' }
    }

		await axios
			.post('https://bazaar-server.herokuapp.com/api/stalls/create', formData, config)
			.then((res) => res.data)
			.then((data) => data.msg)
			.then((msg) => {
        if (Array.isArray(msg)) {
          printErrors(msg);
        } else if (msg === 'Stall created') {
          addNotification(msg, 'success');
          window.location.reload();
        } else {
          addNotification(msg, 'danger');
        }
			});
  };

  
  return (
    <div>
      
      {/* .............................Button....................................... */}
      <div className="request-a-stall">
        <FaPlus  style={{color: 'green', cursor: 'pointer', display: 'inline'}} onClick={ () => setmodalState(true) } title="Request a stall" />
      </div>
      {/* .............................Button....................................... */}

      {/* .............................Modal....................................... */}
      <div className="stall-modal">
        
        <Modal
          id="request-a-stall-modal"
          isOpen={modalState} 
          onRequestClose={() => setmodalState(false)} 
          onAfterOpen= {() => setNewStall({ ...newStall, user: signedInUser._id })}
          style={
            { overlay: {backgroundColor: 'grey'} }
          } 
        >
        <form  onSubmit={(e) => createStall(e)}>
          <FaTimes style={{color: 'red', cursor: 'pointer', display: 'inline'}} onClick={() => setmodalState(false)}  />
          
        
          <input type="text" placeholder="Enter Stall Name" name="name" /> 
          <br /><br />

          

          <select  name="section">
            <option default>Select an appropriate section</option>

            <option value="60c4c6ddc118f71813de7c27" name="antiques">Antiques</option>
            <option value="60c4c70ec118f71813de7c28" name="carpets_and_rugs">Carpets and Rugs</option>
            <option value="60c4c737c118f71813de7c29" name="ceramics">Ceramics</option>
            <option value="60c4c773c118f71813de7c2a" name="clothes">Clothes</option>
            <option value="60c4c7b1c118f71813de7c2b" name="electronics">Electronics</option>
            <option value="60c4c7e4c118f71813de7c2c" name="furnitures">Furnitures</option>
            <option value="60c4c804c118f71813de7c2d" name="home_decor">Home Decor</option>
            <option value="60c4c825c118f71813de7c2e" name="jewellery">Jewellery</option>

          </select> <br /><br /><br />

          <input type="file" name="image" /> 

          <button type='submit'>Submit</button>
        </form>
        </Modal>
        
        
        {console.log(newStall)}
          
        {/* .............................Modal....................................... */}
      </div>

    </div> 
  )
}

export default RequestStall
