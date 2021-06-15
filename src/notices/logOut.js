import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

const addNotification = () => {
	store.addNotification({
		title: 'Logout',
		message: 'User has been logged out successfully',
		type: 'success',
		container: 'top-right',
		animationIn: ['animated', 'fadeIn'],
		animationOut: ['animated', 'fadeOut'],
		dismiss: {
			duration: 2000
		}
	});
};

export default addNotification;
