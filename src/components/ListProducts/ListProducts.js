import React from 'react'

function ListProducts() {
  return (
    <div>
      <Modal 
        // className="request-a-stall-modal"
        // isOpen={modalState} 
        // onRequestClose={() => setmodalState(false)} 
        // onSubmit= { setNewStall(setNewStall({ ...newStall, user: signedInUser._id }))}
        // style={
        //   { overlay: {backgroundColor: 'grey'} }
        // } 
      >
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
        
        <button className="addProducts" onClick={(e) => setProducts([ ...products, ['product added'] ])}> Add Products </button> <br />
      
      </Modal>  
    </div>
  )
}

export default ListProducts
