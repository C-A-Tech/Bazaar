import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import BasketProduct from './BasketProduct';
import DeleteBasket from './DeleteBasket';
import './Basket.css'
import EmptyBasket from './src/EmptyBasket.png'

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
			<div id="Basket">
				<div id="BasketContainer"> 
				
						<div>
							<header className="basketTitle" > 
								<h1 style={{ color: "white" }}> Your Basket</h1>
							</header>
							
							<div className="basketBody"> 
								
								{(basket.length === 0 || basket.length) ?  
									<div className="emptyBasket">
										<img src={EmptyBasket}></img> 
										<p> Basket empty</p>
									</div>
								: basket.products.map((b) => {
								return (
									<div className="activeBasket">
										<BasketProduct productId={b.productId} />
									</div>
									);
								})}
								{(basket.total > 0) &&
								<div className="checkout">
									<h1>Total: £{basket.total}</h1>
									<DeleteBasket basketId={basket._id}/>
								</div>
								}
							</div>


						</div>  
				</div>

			</div>
		);



}

export default Basket;
