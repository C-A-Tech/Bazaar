import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
let signedInUser = cookies.get('user');

const submit = async (basket) => {
	let basketToSend = {
		name: basket.props.product.name,
		productId: basket.props.product._id,
		user: signedInUser._id,
		price: basket.props.product.price,
		quantity: 1
	};

	const basketJson = JSON.stringify(basketToSend);
  console.log(basketJson);
	await axios.post(
		'https://bazaar-server.herokuapp.com/api/basket/add',
		basketJson,
		{
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);
};

function AddToBasket(props) {
	const [basket, setBasket] = useState([]);

	return (
		<div>
			<button
				className='addToBasket'
				onClick={() => {
					setBasket({ ...basket, props });
					submit(basket);
				}}
			>
				{' '}
				Add to Basket{' '}
			</button>
		</div>
	);
}

export default AddToBasket;
