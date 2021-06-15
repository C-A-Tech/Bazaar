import { FaPowerOff } from 'react-icons/fa';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router';
import { useState } from 'react';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import addNotification from '../../notices/logOut'


function LogOut() {
	const [redirect, setRedirect] = useState(false);

	const destroyCookies = () => {
		const cookies = new Cookies();
		cookies.remove('user');
		setRedirect(true);

		addNotification();
	};

  const addNotification = () => {
    store.addNotification({
      title: 'Logout',
      message: 'User has been logged out successfully',
      type: 'success',                         
      container: 'top-right',                
      animationIn: ["animated", "fadeIn"],     
      animationOut: ["animated", "fadeOut"],  
      dismiss: {
        duration: 1500
      }
    })
  }

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
