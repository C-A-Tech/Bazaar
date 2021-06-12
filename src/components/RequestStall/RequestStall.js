import React, {useState} from 'react';
import Modal from 'react-modal';
import { FaTimes, FaPlus } from 'react-icons/fa';
import axios from 'axios';
import Cookies from 'universal-cookie';


Modal.setAppElement('#root')

function RequestStall() {
  const [modalState, setmodalState] = useState(false);
  const [newStall, setNewStall] = useState('');
  const [products, setProducts] = useState([]);
  const cookies = new Cookies

  let signedInUser = cookies.get('user')

  const printErrors = (msg) => {
		msg.forEach((element) => {
			console.log(element.msg);
		});
	};

	const createStall = async (event) => {
		event.preventDefault();
		const userJson = JSON.stringify(newStall);
		await axios
			.post('https://bazaar-server.herokuapp.com/api/users/signup', userJson, {
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

        <Modal 
          className="request-a-stall-modal"
          isOpen={modalState} 
          onRequestClose={() => setmodalState(false)} 
          onSubmit= { setNewStall(setNewStall({ ...newStall, user: signedInUser._id }))}
          style={
            { overlay: {backgroundColor: 'grey'} }
          } 
        >
          <FaTimes style={{color: 'red', cursor: 'pointer', display: 'inline'}} onClick={() => setmodalState(false)}  />
          
        
          <input 
            type="text" 
            placeholder="Enter Stall Name"
            onChange={(e) => setNewStall((e) => setNewStall({...newStall, name: e.target.value}))}
          /> 
          <br /><br />

          <select  onChange={(e) => setNewStall((e) => setNewStall({...newStall, section: e.target.value}))}>
            <option default>Select an appropriate section</option>

            <option value="antiques" >Antiques</option>
            <option value="carpets_and_rugs">Carpets and Rugs</option>
            <option value="ceramics">Ceramics</option>
            <option value="clothes">Clothes</option>
            <option value="jewellery">Electronics</option>
            <option value="furnitures">Furniture</option>
            <option value="home_decor">Home Decor</option>
            <option value="jewellery">Jewellery</option>

          </select> <br /><br /><br />

          <input 
            type="file" 
            onChange={(e) => setNewStall((e) => setNewStall({...newStall, image: e.target.value}))}
          /> 

          <input type="submit" value="Submit" />
        </Modal>

        
          
        {/* .............................Modal....................................... */}
      </div>

    </div> 
  )
}

export default RequestStall
