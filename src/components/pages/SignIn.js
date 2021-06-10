import React, { useState } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';

function SignIn() {
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

	const submit = async (event) => {
		event.preventDefault();
		const userJson = JSON.stringify(user);
		await axios
			.post('http://localhost:5000/api/users/login', userJson, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then((res) => res.data)
			.then((data) => {
        if(data.msg){
          // use this to create a flash message
          console.log(data.msg)
        } else {
          // use the below to implement sesions
          console.log(data)
        }
      })
	};

	return (
		<div>
			<form onSubmit={submit}>
				<input
					type='email'
					placeholder='Email'
					onChange={(e) => setUser({ ...user, email: e.target.value })}
				/>
				<input
					type='password'
					placeholder='Password'
					onChange={(e) => setUser({ ...user, password: e.target.value })}
				/>
				<button type='submit'>Sign In</button>
			</form>
		</div>
	);
}

export default SignIn;
