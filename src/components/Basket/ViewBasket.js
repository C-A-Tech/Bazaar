import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import BasketProduct from './BasketProduct';
import DeleteBasket from './DeleteBasket';

const cookies = new Cookies();
const signedInUser = cookies.get('user');

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
				console.log(res.data);
			});
	};

	useEffect(() => fetchBasket(), []);
	return [basket];
};

function Basket() {
	const [basket] = useBasketRead();

		return (
			<div style={{ marginTop: '30px' }}>
				{(basket.length === 0) ?  <div style={{ marginTop: '200px' }}>The basket is empty</div> : basket.products.map((b) => {
					return (
						<div>
							<BasketProduct productId={b.productId} />
						</div>
					);
				})}
	
				{basket.total}
	
				<DeleteBasket basketId={basket._id}/>
			</div>
		);



}

export default Basket;
