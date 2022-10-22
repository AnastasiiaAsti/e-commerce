import React from 'react';
import './LoginPage.css';
import { Link, useHistory } from "react-router-dom";
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useState } from 'react';

export default function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='login'>
      <Link to='/' style={{ textDecoration: "none" }}>
      <div className="login__logo">
        <StorefrontIcon className='login__logoImage' fontSize="large" />
        <h2 className="login__logoTitle">E-commerce</h2>
      </div>
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

          <button type="submit" className='login__signInButton'>Sign In</button>
        </form>

        <p>
          By signing in you agree to the e-Commerce Website Conditions od Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Internet-Based Ads Notice.
        </p>

        <button className="login__registerButton">Create your E-commerce Account</button>
      </div>
    </div>
  )
}

