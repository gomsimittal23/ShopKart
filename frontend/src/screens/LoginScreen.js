import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginScreen.css';
const validator = require('validator');


const LoginScreen = () => {

    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [myError, setMyError] = useState("");

    const submit = (e) => {
        // console.log("gii")
        e.preventDefault();

        // console.log(email);
        // console.log(password);

        if(!validator.isEmail(email))
        {
          setMyError("please enter valid email")
          return;
        }

        if(!password)
        {
          setMyError("please enter a password");
          return;
        }

        

        history.push('/');
        // redirect('/')
    }

  return (
    <div id="login-form-wrap">
  <h2>Login</h2>
  <form id="login-form">
    <p>
        <input type="text" id="username" name="username" placeholder="Email address" required
          onChange={e => setEmail(e.target.value)}/>
        <i class=""><span></span><span></span></i>
    </p>
    <p>
        <input type="password" id="email" name="email" placeholder="Password" required
          onChange={e => setPassword(e.target.value)}/>
        <i class=""><span></span><span></span></i>
    </p>
    <p>
    {/* <Link to='/'>
        <input type="submit" id="login" value="Login" onClick={e => submit(e)}/>
    </Link> */}
    
    <input type="submit" id="login" value="Login" onClick={e => submit(e)}/> 
    </p>
    <p>
      <h5>{myError}</h5>
    </p>
  </form>
  <div id="create-account-wrap">
    {/* <p>Not a member? <a href="#">Create Account</a></p> */}
  </div>
</div>
  )
}

export default LoginScreen;