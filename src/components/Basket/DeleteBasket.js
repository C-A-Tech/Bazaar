import axios from 'axios';
import Cookies from 'universal-cookie';
import addNotification from '../../notices/notice';
import { Redirect } from 'react-router';
import { useState } from 'react';

function DeleteBasket(props) {
	console.log(props.basketId);
	const [redirect, setRedirect] = useState(false);

	const deleteCurrentBasket = async () => {
		await axios
			.delete(
				`https://bazaar-server.herokuapp.com/api/basket/delete/${props.basketId}`
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
