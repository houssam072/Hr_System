// @ts-nocheck
import { User } from '../../Context';
import axios from 'axios';
import Loading from '../loading/Loading';
import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Cookies from 'universal-cookie';

export default function StillLogin() {
const context = useContext(User)
const token = context.auth;
const refreshtoken = context.refresh;
const [loading , setLoading] = useState(true)


    useEffect(() => {
    async function refresh(){
        console.log(refreshtoken);

        try {
            const response = await axios.post('http://127.0.0.1:8001/auth/login/refresh/', {
                headers: {Authorization: "Bearer " + refreshtoken},  
            })
            const new_access = response.data.access
            context.setAuth(new_access)

                console.log(response);
                console.log('refresh:',refreshtoken);

            
    
            
    
        } catch (error) {
            console.error('Token refresh failed', error);
            
        }finally{
            setLoading(false)
        }
    }

    !token ? refresh() : setLoading(false);
}, [])
  return (
    loading ? <Loading />: <Outlet /> 
  )
}
