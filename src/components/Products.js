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
          <span className="eachProductName"> {filteredProduct.name} </span> <br />
          <span className="eachProductDescription"> {filteredProduct.description} </span>
        </div>
        ))
      }
    </div>
  )
  
}

export default Products
