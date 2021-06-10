import React, { useState } from 'react';
import { Redirect } from 'react-router';
import cookies from '../Cookies';
//import axios from 'axios';

function SignUp() {
  const [user, setUser] = useState('')
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [dob, setDob] = useState('');

  const submit = (event) => {
    event.preventDefault();

    // const registered = {
    //   first_name: firstName,
    //   last_name: lastName,
    //   email: email,
    //   password: password,
    //   dob: dob
    // }

  
    console.log(user)
    console.log(JSON.stringify(user))
    
    fetch('https://bazaar-server.herokuapp.com/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ user }),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => console.log(json))
    
    //<Redirect to="/somewhere/else" />
    
    
    // fetch('https://bazaar-server.herokuapp.com/api/users/signup', {
    //   method: 'POST',
    //   body: JSON.stringify({registered}),
    //   headers: { 'Content-Type': 'application/json' },
    //   // We convert the React state to JSON and send it as the POST body
      
    // }).then(function(response) {
    //   console.log(response)
    //   return response.json();
    // });

    // axios.post('https://bazaar-server.herokuapp.com/api/users/signup', JSON.stringify(registered))
    //   .then(response => console.log(response.data))
    // axios({
    //   method: 'post',
    //   url: 'https://bazaar-server.herokuapp.com/api/users/signup',
    //   data: registered
    // }).then((response) => {
    //   console.log(response)}
    //   )
  }
  


  return (
    <div>
      <form onSubmit={submit}>
        <input type="text"  placeholder="First Name" onChange={ (e) => setUser({ ...user, first_name: e.target.value })} required/>
        <input type="text"  placeholder="Last Name" onChange={ (e) => setUser({ ...user, last_name: e.target.value })} required/>
        <input type="email"  placeholder="Email" onChange={ (e) => setUser({ ...user, email: e.target.value })} required/>
        <input type="password"  placeholder="Password" onChange={ (e) => setUser({ ...user, password: e.target.value })} required/>
        <input type="date"  placeholder="Date of Birth" onChange={ (e) => setUser({ ...user, dob: e.target.value })} required/>
       <button type="submit" >Sign Up</button>
      </form>
    </div>
  )

}

export default SignUp
