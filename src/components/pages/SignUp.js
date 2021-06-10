import React, { useState } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';

function SignUp() {
	const [user, setUser] = useState('');

	const printErrors = (msg) => {
		msg.forEach((element) => {
			console.log(element.msg);
		});
	};

	const submit = async (event) => {
		event.preventDefault();
		const userJson = JSON.stringify(user);
		await axios
			.post('https://bazaar-server.herokuapp.com/api/users/signup', userJson, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then((res) => res.data)
			.then((data) => data.msg)
			.then((msg) => {
        // use this to create flash error messages
				Array.isArray(msg) ? printErrors(msg) : console.log(msg);
			});


     <Redirect to="/signin" />
	};

  
  

	return (
		<div>
			<form onSubmit={submit}>
				<input
					type='text'
					placeholder='First Name'
					onChange={(e) => setUser({ ...user, first_name: e.target.value })}
					required
				/>
				<input
					type='text'
					placeholder='Last Name'
					onChange={(e) => setUser({ ...user, last_name: e.target.value })}
					required
				/>
				<input
					type='email'
					placeholder='Email'
					onChange={(e) => setUser({ ...user, email: e.target.value })}
					required
				/>
				<input
					type='password'
					placeholder='Password'
					onChange={(e) => setUser({ ...user, password: e.target.value })}
					required
				/>
				<input
					type='date'
					placeholder='Date of Birth'
					onChange={(e) => setUser({ ...user, dob: e.target.value })}
					required
				/>
				<button type='submit'>Sign Up</button>
			</form>
		</div>
	);
}

export default SignUp;
