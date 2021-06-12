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

function Products() {
  const [products] = useProducts();
  return (
    <div>
      {products.map((product) => {
        return( <div className="eachProduct"> 
          <span className="eachProductName"> {product.name} </span> <br />
          <span className="eachProductDescription"> {product.description} </span>
        </div>)
      })}
    </div>
  )
  
}

export default Products
