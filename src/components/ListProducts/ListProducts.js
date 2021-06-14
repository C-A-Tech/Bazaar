import React, {useState} from 'react';
import Modal from 'react-modal';
import { FaTimes, FaPlus } from 'react-icons/fa';

function ListProducts() {
  const [products, setProducts] = useState([]);
  const [modalState, setmodalState] = useState(false);
  return (
    <div>

      {/* .............................Button....................................... */}
      <div className="addProducts">
        <FaPlus  style={{color: 'green', cursor: 'pointer', display: 'inline'}} onClick={ () => setmodalState(true) } />
      </div>
      {/* .............................Button....................................... */}

      <Modal 
        className="request-a-stall-modal"
        isOpen={modalState} 
        onRequestClose={() => setmodalState(false)} 
        // onSubmit= { setNewStall(setNewStall({ ...newStall, user: signedInUser._id }))}
        style={
          { overlay: {backgroundColor: 'grey'} }
        } 
      >
        <FaTimes style={{color: 'red', cursor: 'pointer', display: 'inline'}} onClick={() => setmodalState(false)}  />
        <form>
          <br /><input type="text" placeholder="Enter Item Name"/> <br /><br />
          £ <input type="text" placeholder="Set Item Price"/> <br /><br />
          <textarea placeholder="Enter Item Description" /> <br />
             
          {products.map( (product, index) => {
            return (
              <div key={index} className="moreProducts">  
                <form>
                  <br /><input type="text" placeholder="Enter Item Name"/> <br /><br />
                  £ <input type="text" placeholder="Set Item Price"/> <br /><br />
                  <textarea placeholder="Enter Item Description" /> <br />
                </form>
                
              </div>
            )
          })}
        </form>
        
        <button className="addProducts" onClick={(e) => setProducts([ ...products, ['product added'] ])}> Add More Products </button> <br /><br />
        <input type="submit" value="Submit" />
      </Modal>  
    </div>
  )
}

export default ListProducts
