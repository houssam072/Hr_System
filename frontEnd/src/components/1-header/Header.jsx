// @ts-nocheck
// react tools
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

// style css
import './header.css';
import axios from 'axios';
import { User } from '../../Context';

export default function Header() {
  const userNow = useContext(User);
  const staff = userNow.staff;
  const name = userNow.name;



  async function logout(){
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('username');
    window.location.pathname = '/login';
    const response = await axios('http://127.0.0.1:8001/api/Logout/', {
          method: 'POST',

      });
      if (response.status === 200) {
          console.log('Logout successful');
      } else {
          console.log('Logout failed');
      }
};

  return (
    <div className="header">
        <div className="container">
            <nav>
                <Link id='home' className='home' to="/">Home</Link>
                <div className='auth'>
                          {!name == '' ? 
                          <>
                          <Link id='logout' to="/login" onClick={logout}>logout</Link>

                          {staff 
                            ? 
                            <Link id='admin' to="/admin">Admin</Link>
                            :
                            <Link id='apply' to="/apply">Apply</Link>
                             }
                            </>
                          :
                          <>
                            <Link id='register' to="/register">Register</Link>
                            <Link id='login' to="/login">login</Link>
                          </>
                          
                          }
                </div>
            </nav>
        </div>
    </div>
  )
}
