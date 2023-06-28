import React from 'react';
import { useState,useContext } from 'react';
import { FirebaseContext } from '../../store/Context';
import { getAuth} from "firebase/auth";
import Logo from '../../olx-logo.png';
import './Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const {firebase}=useContext(FirebaseContext)
  const navigate=useNavigate()

  const auth=getAuth(firebase)  

  const handleLogin=(e)=>{
   e.preventDefault()
   signInWithEmailAndPassword(auth,email,password).then((result)=>{  
    alert('Logged in')
    navigate("/")
    
   }).catch((error)=>{
    alert(error.message)
   })

  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
