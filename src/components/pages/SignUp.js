import React, { useState } from 'react';


function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  return (
    <div>
      <form>
        <input type="text"  placeholder="First Name" onChange={ (e) => setFirstName(e.target.value)} required/>
        <input type="text"  placeholder="Last Name" onChange={ (e) => setLastName(e.target.value)} required/>
        <input type="email"  placeholder="Email" onChange={ (e) => setEmail(e.target.value)} required/>
        <input type="password"  placeholder="Password" onChange= {(e) => setPassword(e.target.value)} required/>
        <input type="date"  placeholder="Date of Birth" onChange={ (e) => setDob(e.target.value)} required/>
       <button type="submit" >Sign In</button>
      </form>
    </div>
  )
}

export default SignUp
