// @ts-nocheck
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './app_detailes.css'
import axios from 'axios';
import DownloadCvButton from '../DownloadCv/DownloadCvButton';
import { User } from '../../../Context';



export default function App_detailes() {
  const staf = window.localStorage.getItem('staff');
  console.log(staf);
    const { id } = useParams();
    const [data, setData] = useState(null);
    const context = useContext(User);
    // @ts-ignore
    const token = context.auth;


    useEffect( () => {
      const res = axios.get(`http://127.0.0.1:8001/job/api/detail_app/${id}/`,
          { 
              headers:
              {
                Accept: "application/json",
                Authorization: "Bearer " + token,
              },
          }
        )
        .then(response => {
          // Update the state with the actual data
          setData(response.data);
          console.log(response); // Log the entire response object if needed
        })

        console.log(res);

        }, [])

    




  return (
    <div>
      <div className="container">

      {data ? (
        <div className='detailes'>
            <div className="title">
              <h1>Jop Application</h1>
            </div>
          <div className="info">
            <h3>Job Title: <span>{data.job}</span></h3>
            <h3>First Name: <span>{data.first_name}</span></h3>
            <h3>First Last: <span>{data.last_name}</span></h3>
            <h3>Birth Date: <span>{data.birth_date}</span></h3>
            <h3>Jop Department: <span>{data.department}</span></h3>
            <h3>Experiense: <span>{data.experiense}</span></h3>
            <DownloadCvButton id = {id}/>
          </div>
        </div>
        ) : (
           <h2>Loading...</h2>
        )}

      </div>
    </div>
  )
}
