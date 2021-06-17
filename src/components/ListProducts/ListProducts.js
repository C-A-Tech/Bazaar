import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaTimes, FaPlus } from 'react-icons/fa';
import axios from 'axios';
import Cookies from 'universal-cookie';
import addNotification from '../../notices/notice';
import './ListProducts.css';
import { Redirect } from 'react-router';

function ListProducts(props) {
	const [modalState, setmodalState] = useState(false);
	const [addMoreProducts, setAddMoreProducts] = useState([]);
	const [newProduct, setNewProduct] = useState([]);
	const [files, setFiles] = useState([]);
	const [redirect, setRedirect] = useState(false);
	const cookies = new Cookies();
	let signedInUser = cookies.get('user');

	const submit = async (event) => {
		event.preventDefault();
		let user = signedInUser._id;

		const formData = new FormData(event.target);
		setFiles(event.target.files);

		formData.set('user', `${user}`);
		formData.set('section', `${props.section}`);
		formData.set('stall', `${props.stall}`);

		formData.set('name', formData.get('name'));
		formData.set('price', formData.get('price'));
		formData.set('description', formData.get('description'));

		for (let i = 0; i < files.length; i++) {
			formData.append(`images[${i}]`, files[i]);
		}

		for (var pair of formData.entries()) {
			console.log(pair[0] + ', ' + pair[1]);
		}

		const printErrors = (msg) => {
			msg.forEach((element) => {
				addNotification(element.msg, 'danger');
			});
		};

		const config = {
			headers: { 'content-type': 'multipart/form-data' }
		};

		await axios
			// .post('http://localhost:5000/api/products/create', formData, config)
			.post(
				'https://bazaar-server.herokuapp.com/api/products/create',
				formData,
				config
			)
			.then((res) => res.data)
			.then((data) => data.msg)
			.then((msg) => {
				if (Array.isArray(msg)) {
					printErrors(msg);
				} else if (msg === 'product created') {
					addNotification(msg, 'success');
					setRedirect(true);
				} else {
					addNotification(msg, 'danger');
				}
			});
	};

	if (redirect) {
		return <Redirect to='/my-stalls/:id' />;
	}
  
  return (
    <div id="ListProductContainer">

      {/* .............................Button....................................... */}
      <div className="addProducts" style={{color: 'green', cursor: 'pointer', display: 'inline'}} onClick={ () => setmodalState(true) } title="List a product" >
        <div>Add an item to stall <FaPlus  /></div>
      </div>
      {/* .............................Button....................................... */}

      {/* .............................Modal....................................... */}
      <Modal 
        className="list-products-modal"
        isOpen={modalState} 
        onRequestClose={() => setmodalState(false)}
        
      >
        <div className="newProductForm">
          <header>
            <h1>Add New Product</h1>
            <FaTimes style={{color: 'red', cursor: 'pointer', display: 'inline', fontSize:"2em"}} onClick={() => setmodalState(false)}  />
          </header>
          <form onSubmit={submit}>
            <label>
            Enter Item Name
            <input type="text" placeholder="e.g Stainless Steel Pots" name="name" /> 
            </label><br/>
            <label>
            Set Item Price
            <input type="text" placeholder="10" name="price" /> 
            </label><br/>
            <label>
            Enter Item Description
            <textarea placeholder="Tefal saucepans used once..." name="description" style={{height:150}}/>
            </label><br/>
            <label>
            Add images 
            <input type="file" multiple name="image" />
            </label><br/>
            <input type="submit" value="Submit" />
          </form>
        </div>
        {/* {addMoreProducts.map( (product, index) => {
          return (
            <div key={index} className="moreProducts">  
              <form>
              <br /><input type="text" placeholder="Enter Item Name" onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value } )} /> <br /><br />
              £ <input type="text" placeholder="Set Item Price" onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value } )} /> <br /><br />
              <textarea placeholder="Enter Item Description" onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value } )} /> <br />
              </form>
              
            </div>
          )
        })}
        
        
        <button className="addProducts" onClick={(e) => setAddMoreProducts({ ...addMoreProducts,  })}> Add More Products </button> <br /><br /> */}
			</Modal>

			{/* .............................Modal....................................... */}
		</div>
	);
}

export default ListProducts;
