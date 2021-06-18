import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { FaTimes, FaCommentDollar } from 'react-icons/fa';
import AddToBasket from './AddToBasket';

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

function BasketProduct(props) {
	const [products] = useProducts();
	const [modalState, setmodalState] = useState(false);
	const [selectedProductId, setSelectedProductId] = useState('');

	const selectedProduct = (id) => {
		setmodalState(true);
		setSelectedProductId(id);

		return selectedProductId;
	};

	return (
		<div>
			{products
				.filter((product) => product._id === props.productId)
				.map((filteredProduct) => (
					<>
						<div onClick={() => selectedProduct(filteredProduct._id)} className="eachCheckoutProduct">
							<div className="checkoutImg">	{filteredProduct.image[0] && (
								 <img src={filteredProduct.image[0]} />
							)}
							</div>
							<div className='checkoutProductName'> <h1>{filteredProduct.name}</h1></div>
							<div className='checkoutProductPrice'>
								<p>Price: £{filteredProduct.price}</p>
							</div>
						</div>
					</>
				))}
		</div>
	);
}

export default BasketProduct;
