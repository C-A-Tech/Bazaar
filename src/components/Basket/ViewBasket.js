import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import BasketProduct from './BasketProduct';

const cookies = new Cookies();
let signedInUser = cookies.get('user');

const useBasketRead = () => {
	const [basket, setBasket] = useState([]);

	const fetchBasket = async () => {
		const user = signedInUser._id;

		const userJson = JSON.stringify({
			user: user
		});
		const config = {
			headers: { 'content-type': 'application/json' }
		};

		await axios
			.post('https://bazaar-server.herokuapp.com/api/basket', userJson, config)
			.then((res) => {
				setBasket(res.data);
				console.log(res.data.products);
			});
	};

	useEffect(() => fetchBasket(), []);
	return [basket];
};

function Basket() {
	const [basket] = useBasketRead();
	const total = basket.total || 0;
	const products = basket.products || [];

	if (products.length === 0) {
		return <div style={{ marginTop: '200px' }}>The basket is empty</div>;
	}

	return (
		<div style={{ marginTop: '30px' }}>
			{products.map((b) => {
				return (
					<div>
						<BasketProduct productId={b.productId} />
					</div>
				);
			})}

			{total}
		</div>
	);
}

export default Basket;
