import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import Modal from 'react-modal';
import { FaTimes, FaCommentDollar } from 'react-icons/fa';

const useProducts = () => {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		await axios
			.get('https://bazaar-server.herokuapp.com/api/products')
			.then((res) => setProducts(res.data));
	};

	useEffect(() => fetchProducts(), []);

	return [products];
};

function Products(props) {
  const [products] = useProducts();
  const [modalState, setmodalState] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState('')
  
  const selectedProduct = (id) => {
    setmodalState(true)
    setSelectedProductId(id)
  
    return selectedProductId;
  }
  
  
  return (
    <div>
      {/* .............................Displays All Products....................................... */}
      {products.filter((product) => product.stall === props.stall).map(filteredProduct => 
        (
          <>
            <div className="eachProduct" onClick={ () => selectedProduct(filteredProduct._id) }> 
              <img src={filteredProduct.image}/>
              <h1 className="eachProductName"> {filteredProduct.name} </h1> 
              <p className="eachProductDescription"> {filteredProduct.description} </p>
              <p className="eachProductPrice"> Price: £{filteredProduct.price} </p>
            </div>
            {/* .............................Products Modal....................................... */}
            { products.filter((product) => product._id === selectedProductId).map((filteredProduct) => (
              
              <Modal id="productModal" isOpen={modalState} onRequestClose={() => setmodalState(false)} style={{ overlay: {backgroundColor: 'grey'} }}>
                <FaTimes title="Close" style={{color: 'red', cursor: 'pointer', display: 'inline'}} onClick={() => setmodalState(false)}  />
                <img src={filteredProduct.image}/>
                <h1 className="eachProductName"> {filteredProduct.name} </h1> 
                <p className="eachProductDescription"> {filteredProduct.description} </p>
                <p className="eachProductPrice"> Price: £{filteredProduct.price} </p>
                <FaCommentDollar title="Haggle" style={{cursor: 'pointer', display: 'inline'}}/>
              </Modal>
            ) ) }
          </>
        ))
      }
    </div>
  )
  
}

export default Products
