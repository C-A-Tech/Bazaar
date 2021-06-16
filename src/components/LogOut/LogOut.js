import { FaPowerOff } from 'react-icons/fa';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router';
import { useState } from 'react';
import addNotification from '../../notices/notice';

function LogOut() {
	const [redirect, setRedirect] = useState(false);

	const destroyCookies = () => {
		const cookies = new Cookies();
		cookies.remove('user');
		setRedirect(true);

		addNotification('Logged out successfully', 'success');
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
			</div>
		</div>
	);
}

export function LogOutButton() {
	const [redirect, setRedirect] = useState(false);

	const destroyCookies = () => {
		const cookies = new Cookies();
		cookies.remove('user');
		setRedirect(true);

		addNotification('Logged out successfully', 'success');
	};

	if (redirect) {
		return <Redirect to='/' />;
	}

	return (
		<div>
			<button className='nav-buttons' onClick={() => destroyCookies()}>
					{' '}
					Log Out{' '}
			</button>
		</div>
	);

}


export default LogOut;
