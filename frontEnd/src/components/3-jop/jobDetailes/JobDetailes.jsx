// @ts-nocheck
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './jobdetailes.css'
import axios from 'axios';
import { User } from '../../../Context';

export default function JobDetailes() {
    const { id } = useParams();
    const [data, setData] = useState(null);
  const context = useContext(User);
  const token = context.auth;
  console.log(id);

    useEffect( () => {
              const res = axios.get(`http://127.0.0.1:8001/job/api/detail_job/${id}/`,
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
    
    <div className='job_detailes'>
      <div className="container">

      {data ? (
        <div className='detailes'>
            <div className="title">
              <h1>Jop Application</h1>
            </div>
          <div className="info">
            <div className='image_job'>
            {<img src={data.image} alt={data.title} />}

            </div>
            
            <h3>Job Title: <span>{data.title}</span></h3>
            <h3>Jop Department: <span>{data.department}</span></h3>
            <h3>Description: <span>{data.desc}</span></h3>
          </div>
        </div>
        ) : (
           <h2>Loading...</h2>
        )}

      </div>
    </div>  
  )
}
