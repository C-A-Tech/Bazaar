import axios from 'axios';
import Cookies from 'universal-cookie';
import addNotification from '../../notices/notice';
import { Redirect } from 'react-router';
import { useState } from 'react';

const cookies = new Cookies();
const signedInUser = cookies.get('user');
const userId = signedInUser._id;

function DeleteBasket(props) {
	console.log(props.basketId)
	const [redirect, setRedirect] = useState(false);

	const deleteCurrentBasket = async () => {
		const userJson = JSON.stringify({
			user: userId
		});
		const config = {
			headers: { 'content-type': 'application/json' }
		};

		await axios
			.delete(
				// `https://bazaar-server.herokuapp.com/api/basket/delete/{props.basketId}`,
				`http://localhost:5000/api/basket/delete/${props.basketId}`,
				// userJson,
				// config
			)
			.then((res) => res.data)
			.then((data) => {
				if (data.msg === 'Basket emptied') {
					addNotification('Checkout successful', 'success');
					setRedirect(true);
				}
			});
	};

	if (redirect) {
		return <Redirect to='/home' />;
	}

	return (
		<div>
			<button className='nav-buttons' onClick={() => deleteCurrentBasket()}>
				{' '}
				Checkout{' '}
			</button>
		</div>
	);
}

export default DeleteBasket;
