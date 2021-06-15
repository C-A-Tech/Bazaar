import { FaPowerOff } from 'react-icons/fa';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router';
import { useState } from 'react';
import addNotification from '../../notices/logOut';

function LogOut() {
	const [redirect, setRedirect] = useState(false);

	const destroyCookies = () => {
		const cookies = new Cookies();
		cookies.remove('user');
		setRedirect(true);

		addNotification();
	};

	if (redirect) {
		return <Redirect to='/' />;
	}

	return (
		<div>
			<div className='log-out-buttons'>
				<FaPowerOff
					className='nav-icons'
					onClick={() => destroyCookies()}
					style={{ cursor: 'pointer' }}
					title='Log Out'
				/>
				<button className='nav-buttons' onClick={() => destroyCookies()}>
					{' '}
					Log Out{' '}
				</button>
			</div>
		</div>
	);
}

export default LogOut;
