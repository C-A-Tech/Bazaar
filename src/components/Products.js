import React, { useEffect, useState } from 'react'; 
import axios from 'axios';

const useProducts = () => {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		await axios
			.get('https://bazaar-server.herokuapp.com/api/products')
			.then((res) => setProducts(res.data));
	};

	useEffect(() => fetchProducts(), []);

  console.log([products])

	return [products];
};

function Products(props) {
  const [products] = useProducts();
  {console.log(props)
  console.log(products)}
  return (
    <div>
      {products.filter((product) => product.stall === props.stall).map(filteredProduct => 
        (
        <div className="eachProduct"> 
          <img src={filteredProduct.image}/>
          <h1 className="eachProductName"> {filteredProduct.name} </h1> 
          <br />
          <p className="eachProductDescription"> {filteredProduct.description} </p>
        </div>
        ))
      }
    </div>
  )
  
}

export default Products
