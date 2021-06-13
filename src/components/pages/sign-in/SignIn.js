import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import {motion} from "framer-motion";
import './Signin.css'
import logo from './src/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Cookies from 'universal-cookie';
import axios from 'axios';


function SignIn() {
	const [user, setUser] = useState('');
  const cookies = new Cookies();
  const [redirect, setRedirect] = useState(false)

	const submit = async (event) => {
		event.preventDefault();
		const userJson = JSON.stringify(user);

      await axios
        .post('https://bazaar-server.herokuapp.com/api/users/login', userJson, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((res) => res.data)
        .then((data) => {
          if (data.msg) {
            // use this to create a flash message
            console.log(data.msg);
          } else {
            cookies.set('user', data, { path: '/' });
            setRedirect(true)
            
          }
        });    
	};


  if (redirect) {
    return <Redirect to="/home" />
  }

	const transition = { duration: 0.5, ease: [0.37, 0, 0.63, 1]};
	return (
   
		<motion.div initial='initial' animate='animate' exit='exit' className="Signin">
			
			<motion.div initial={{opacity:1, position:'relative', left:'-50%'}} animate={{opacity:1, position:'relative', left:'0', transition: {delay:0.001, ...transition}}} className="form-space">
				<div className="home-icon">
					<a href="/"><FontAwesomeIcon icon={faHome} /></a>
				</div>
				<form onSubmit={submit}>
					<header>
						<h1>Welcome</h1>
						<h2>Sign In</h2>
					</header>
					<span>
						<input
							type='email'
							placeholder='Email'
							onChange={(e) => setUser({ ...user, email: e.target.value })}
						/>
					</span>
					<span>
						<input
							type='password'
							placeholder='Password'
							onChange={(e) => setUser({ ...user, password: e.target.value })}
						/>
					</span>
					<a href="/"><p>Forgotten password?</p></a>
					<span>
						<button type='submit'>Sign In</button>
					</span>
				</form>
			</motion.div>			
			<motion.div initial={{width: '75%', position:'absolute', x:'16.7%', y:'-9%'}} animate={{width: '59%', x:'69.5%', y:'1%', transition: {delay:0.002, ...transition}}} className="logo">
        <img src={logo}></img>
      </motion.div>
		</motion.div>
	);
}

export default SignIn;
