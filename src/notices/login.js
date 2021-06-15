import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

const addNotification = (msg, type) => {
	store.addNotification({
		title: 'invalid email or password',
		message: `${msg}`,
		type: `${type}`,
		container: 'top-right',
		animationIn: ['animated', 'fadeIn'],
		animationOut: ['animated', 'fadeOut'],
		dismiss: {
			duration: 2000
		}
	});
};

export default addNotification;
