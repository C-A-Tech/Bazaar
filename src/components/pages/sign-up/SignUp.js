import React, { useState } from 'react';
import { Redirect } from 'react-router';
import {motion} from "framer-motion";
import './Signup.css'
import logo from './src/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
// import cookies from '../../Cookies';

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

  
  
	const transition = { duration: 0.5, ease: [0.37, 0, 0.63, 1]};
	return (
		<motion.div initial='initial' animate='animate' exit='exit' className="Signup">
			<motion.div initial={{opacity:1, position:'relative', left:'-50%'}} animate={{opacity:1, position:'relative', left:'0', transition: {delay:0.001, ...transition}}} className="form-space">
				<div className="home-icon">
					<a href="/"><FontAwesomeIcon icon={faHome} /></a>
				</div>
				<form onSubmit={submit}>
					<header>
						<h1>Welcome</h1>
						<h2>Sign Up</h2>
					</header>
					<span>
						<input
							type='text'
							placeholder='First Name'
							onChange={(e) => setUser({ ...user, first_name: e.target.value })}
							required
						/>
					</span>
					<span>
						<input
							type='text'
							placeholder='Last Name'
							onChange={(e) => setUser({ ...user, last_name: e.target.value })}
							required
						/>
					</span>
					<span>
						<input
							type='email'
							placeholder='Email'
							onChange={(e) => setUser({ ...user, email: e.target.value })}
							required
						/>
					</span>
					<span>
						<input
							type='password'
							placeholder='Password'
							onChange={(e) => setUser({ ...user, password: e.target.value })}
							required
						/>
					</span>
					<span>
						<input
							type='date'
							placeholder='Date of Birth'
							onChange={(e) => setUser({ ...user, dob: e.target.value })}
							required
						/>
					</span>
					<span>
						<button type='submit'>Sign Up</button>
					</span>
				</form>
			</motion.div>
			<motion.div initial={{width: '75%', position:'absolute', x:'16.7%', y:'-9%'}} animate={{width: '59%', x:'69.5%', y:'1%', transition: {delay:0.002, ...transition}}} className="logo">
        <img src={logo}></img>
      </motion.div>
		</motion.div>
	);
}

export default SignUp;
