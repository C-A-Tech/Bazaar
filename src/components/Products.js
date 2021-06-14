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

	return [products];
};

function Products(props) {
  const [products] = useProducts();
  return (
    <div>
      {products.filter((product) => product.stall === props.stall).map(filteredProduct => 
        (
        <div className="eachProduct"> 
          <span className="eachProductName"> <text style={{textTransform: 'capitalize'}}> {filteredProduct.name } </text> </span> <br /> <br />
          <span className="eachProductDescription"> <text style={{textTransform: 'capitalize'}}> { filteredProduct.description } </text> </span>
          <span className="eachProductImage">{ filteredProduct.image } </span>
        </div>
        ))
      }
    </div>
  )
  
}

export default Products
