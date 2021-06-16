import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

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
        setBasket(res.data)
        console.log(res.data)
      });
	};

	useEffect(() => fetchBasket(), []);
	return [basket];
};

function Basket() {
	const [basket] = useBasketRead();

	return (
		<div style={{ marginTop: '40%' }}>
			{basket !== 'null' ? (
				<h1> Your Basket is Empty </h1>
			) : (
				basket.map((x) => <> {x} </>)
			)}
		</div>
	);
}

export default Basket;
