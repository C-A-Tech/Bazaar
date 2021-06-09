import React, { useState } from 'react';


function SignIn() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

  return (
    <div>
      <form>
        <input type="email"  placeholder="Email" onChange={ (e) => setEmail(e.target.value)}/>
        <input type="password"  placeholder="Password" onChange= {(e) => setPassword(e.target.value)}/>
       <button type="submit" >Sign In</button>
      </form>
    </div>
  )
}

export default SignIn
