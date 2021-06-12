import React, { useEffect, useState } from 'react'; 
import axios from 'axios';

const useProducts = (stall_id) => {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		await axios
			.get(`https://bazaar-server.herokuapp.com/api/products/stall/${stall_id}`)
			.then((res) => setProducts(res.data));
	};

	useEffect(() => fetchProducts(), []);

  console.log([products])

	return [products];
};

export default useProducts