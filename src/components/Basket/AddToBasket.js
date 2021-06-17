import axios from 'axios';
import Cookies from 'universal-cookie';
import addNotification from '../../notices/notice'


const cookies = new Cookies();
const signedInUser = cookies.get('user');

const submit = async (basket) => {
	const basketToSend = {
		name: basket.product.name,
		productId: basket.product._id,
		user: signedInUser._id,
		price: basket.product.price,
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

	addNotification('Product added to basket', 'success');
};

function AddToBasket(props) {

	return (
		<div>
			<button className='addToBasket' onClick={() => submit(props)}>
				{' '}
				Add to Basket{' '}
			</button>
		</div>
	);
}

export default AddToBasket;
