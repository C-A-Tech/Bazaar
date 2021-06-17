import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import Modal from 'react-modal';
import { FaTimes, FaCommentDollar } from 'react-icons/fa';
import './Products.css';

const useProducts = () => {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		await axios
			.get('https://bazaar-server.herokuapp.com/api/products')
			.then((res) => setProducts(res.data));
	};

	useEffect(() => fetchProducts(), []);
console.log(products);
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
    <div id="products-contaner">
      {/* .............................Displays All Products....................................... */}
      {products.filter((product) => product.stall === props.stall).map(filteredProduct => 
        (
          <>
            <div className="eachProduct" onClick={ () => selectedProduct(filteredProduct._id) }> 
              <div className="product-img">
              { filteredProduct.image[0] && <img src={filteredProduct.image[0]} style={{display: "block", margin:"0 auto"}}/> }
              </div>
              <div className="product-details">
                <div className="order1">
                <h1 className="eachProductName"> {filteredProduct.name} </h1> 
                </div>
                <div className="order2">
                <p className="eachProductDescription"> {filteredProduct.description} </p>
                </div>
                <div className="order3">
                <p className="eachProductPrice"> Price: £{filteredProduct.price} </p>
                </div>
              </div>
            </div>
            {/* .............................Products Modal....................................... */}
            { products.filter((product) => product._id === selectedProductId).map((filteredProduct) => (
              
              <Modal className="productModal" isOpen={modalState} onRequestClose={() => setmodalState(false)} style={{ overlay: {
                backgroundColor: 'transparent'}}}>
                <div className="productModalContainer">
                

                  <header>
                    <h1 className="eachProductName"> {filteredProduct.name} </h1> 
                    <FaTimes title="Close" style={{color: 'red', cursor: 'pointer', display: 'inline', fontSize:"2em"}} onClick={() => setmodalState(false)}  />
                  </header>
                  <div>
                    <h3 className="eachProductPrice"> Price: £{filteredProduct.price} </h3>
                  </div>
                  <div className="allImages">
                  { filteredProduct.image.map( (image) =><img src={image} width="200px" height="200px" /> ) }
                  </div>
                  <div>
                    <p className="eachProductDescription"> {filteredProduct.description} </p>
                  </div>
                  <div>
                    <button className="addToBasket"> Add to Basket </button>
                  </div>
                </div> 
              </Modal>
            ) ) }
          </>
        ))
      }
    </div>
  )
  
}

export default Products
