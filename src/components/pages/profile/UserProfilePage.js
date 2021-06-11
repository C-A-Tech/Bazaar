import Cookies from 'universal-cookie';

const UserProfilePage = () => {
	const cookies = new Cookies();
	const user = cookies.get('user')

	return (
		<div>
				<div>{user.first_name}</div>
				<div>{user.last_name}</div>
				<div>{user.email}</div>
				<div>{user.dob}</div>
		</div>
	);
};

export default UserProfilePage;
