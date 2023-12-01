// @ts-nocheck
import React, { useContext, useState } from "react";
import '../SignUp/signUp.css';
import axios from 'axios';
import { User } from "../../Context";
import { useNavigate } from "react-router-dom";



export default function SignIn() {



    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [accept, setAccept] = useState(false);
    const [flag, setFlag] = useState(true)
    // const [staff, setStaff] = useState(null);
    const userNow = useContext(User);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const nav = useNavigate();




  
    async function Submit(e){
      e.preventDefault();
      setAccept(true);
      if( name === '' || password.length < 8 ){
        setFlag(false)
      }
      if(flag){
        try{
        let res = await axios.post('http://127.0.0.1:8001/auth/login/', {
          username: name,
          password: password,

        });
        const access = res.data.access
        const refresh = res.data.refresh
        const is_staff = res.data.user.is_staff
        const user = res.data.user.username
        

        userNow.setAuth(access)
        userNow.setRefresh(refresh)
        userNow.setStaff(is_staff)
        userNow.setName(user)
        setSuccessMessage('Login successful!');
        setTimeout(() => {
          nav('/')

        }, 1000

        )
      }
      catch(error){      
        setErrorMessage('login failed please check of your data.');
      }

      }

    }

    


  return (
    
    
    <div className='signUp'>
      <div className="register">
        <h1>Login</h1>
        <form action="" onSubmit={Submit}>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        {successMessage && <div style={{ color: 'blue' }}>{successMessage}</div>}
              <label htmlFor="name">Name:</label>
              <input type="text" placeholder='Enter Your full name please' name="" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
              {name === '' && accept && <p className='error'>please enter your name</p>}



              <label htmlFor="password">Password:</label>
              <input type="password" placeholder='Enter Your Password please' name="" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              { password.length < 8 && accept &&  <p className='error'>Password must be more 8 Charectares</p>}


              <div style={{textAlign:'center'}}>
                <button id="submit" type="submit">Login</button>
              </div>
          
          </form>
      </div>
    </div>
  )
}
