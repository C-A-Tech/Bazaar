import React, {useState} from 'react';
import Modal from 'react-modal';
import { FaTimes, FaPlus } from 'react-icons/fa';
import axios from 'axios';
import Cookies from 'universal-cookie';


const form = new FormData();

Modal.setAppElement('#root')

function RequestStall() {
  const [modalState, setmodalState] = useState(false);
  const [newStall, setNewStall] = useState({});
  
  const cookies = new Cookies

  let signedInUser = cookies.get('user')

  const printErrors = (msg) => {
		msg.forEach((element) => {
			console.log(element.msg);
		});
	};

	const createStall = async (event) => {
    event.preventDefault();
    // const formData = new FormData(request-a-stall-modal);

		const formDataJson = JSON.stringify(newStall);
		await axios
			.post('https://bazaar-server.herokuapp.com/api/stalls/create', formDataJson, {
				// data: 'form',
        headers: {
				  'Content-Type': 'application/json'
          
				}
			})
			.then((res) => res.data)
			.then((data) => data.msg)
			.then((msg) => {
        // use this to create flash error messages
				Array.isArray(msg) ? printErrors(msg) : console.log(msg);
			});
  };
  
  return (
    <div>
      
      {/* .............................Button....................................... */}
      <div className="request-a-stall">
        <FaPlus  style={{color: 'green', cursor: 'pointer', display: 'inline'}} onClick={ () => setmodalState(true) } />
      </div>
      {/* .............................Button....................................... */}

      {/* .............................Modal....................................... */}
      <div className="stall-modal">
        <form  >
        <Modal
          id="request-a-stall-modal"
          isOpen={modalState} 
          onSubmit={(e) => createStall(e)}
          onRequestClose={() => setmodalState(false)} 
          onAfterOpen= {() => setNewStall({ ...newStall, user: signedInUser._id })}
          style={
            { overlay: {backgroundColor: 'grey'} }
          } 
        >
          <FaTimes style={{color: 'red', cursor: 'pointer', display: 'inline'}} onClick={() => setmodalState(false)}  />
          
        
          <input 
            type="text" 
            placeholder="Enter Stall Name"
            onChange={(e) => setNewStall({...newStall, name: e.target.value})}
          /> 
          <br /><br />

          

          <select  onChange={(e) => setNewStall({...newStall, section: e.target.value})}>
            <option default>Select an appropriate section</option>

            <option value="antiques" >Antiques</option>
            <option value="carpets_and_rugs">Carpets and Rugs</option>
            <option value="ceramics">Ceramics</option>
            <option value="clothes">Clothes</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
            <option value="home_decor">Home Decor</option>
            <option value="jewellery">Jewellery</option>

          </select> <br /><br /><br />

          <input 
            type="file" 
            onChange={(e) => setNewStall({...newStall, image: e.target.value})}
          /> 

          <button type='submit'>Submit</button>
        </Modal>
        </form>
        
        {console.log(newStall)}
          
        {/* .............................Modal....................................... */}
      </div>

    </div> 
  )
}

export default RequestStall
