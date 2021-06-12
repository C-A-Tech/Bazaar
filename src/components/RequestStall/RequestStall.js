import React, {useState} from 'react'
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa'

Modal.setAppElement('#root')

function RequestStall() {
  const [modalState, setmodalState] = useState(false)

  return (
    <div>

      {/* .............................Button....................................... */}
      <button className="request-a-stall" onClick={() => setmodalState(true)}> Request A Stall</button>
      {/* .............................Button....................................... */}

      {/* .............................Modal....................................... */}
      <div className="stall-modal">

        <Modal 
          className="request-a-stall-modal"
          isOpen={modalState} 
          onRequestClose={() => setmodalState(false)} 
          style={
            { overlay: {backgroundColor: 'grey'} }
          } 

          >
          <FaTimes style={{color: 'red', cursor: 'pointer', display: 'inline'}} onClick={() => setmodalState(false)}  />
          <input type="text" placeholder="Enter Stall Name"/> <br /><br />

          <select>
            <option default>Select an appropriate section</option>

            <option value="antiques">Antiques</option>
            <option value="carpets_and_rugs">Carpets and Rugs</option>
            <option value="ceramics">Ceramics</option>
            <option value="clothes">Clothes</option>
            <option value="jewellery">Electronics</option>
            <option value="furnitures">Furniture</option>
            <option value="home_decor">Home Decor</option>
            <option value="jewellery">Jewellery</option>

          </select> <br /><br /><br />

          <h4> List Items For Sale</h4>
          <input type="text" placeholder="Enter Item Name"/> <br /><br />
          £ <input type="text" placeholder="Set Item Price"/> <br /><br />
          <textarea placeholder="Enter Item Description" /> <br />

          <input type="submit" value="Submit" />
        </Modal>
          
        {/* .............................Button....................................... */}
      </div>

    </div> 
  )
}

export default RequestStall
