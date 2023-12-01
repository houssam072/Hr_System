// @ts-nocheck

import React , {useState, useEffect, useContext} from 'react';

import './listjop.css'
import Admin from '../sidebar/Admin';
import axios from 'axios';
import {User} from '../../../Context'





export default function ListJpb() {
  const [postList, setPost] = useState([]);
  const context = useContext(User);
  const [successMessage, setSuccessMessage] = useState('');

  const token = context.auth;

  useEffect( () => {
    axios.get('http://127.0.0.1:8001/job/api/list_job/', { 
      headers:{
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },}

    )    .then((data) => setPost(data.data))

  }, [])


const deleteJob = async(id) => {
  await axios.delete(`http://127.0.0.1:8001/job/api/delete_job/${id}/`, { 
      headers:{
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },});

  const newData = await axios.get('http://127.0.0.1:8001/job/api/list_job/', {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
  setPost(newData.data);
  setSuccessMessage('successfully delete jop.');



}

  


  return (


        <div className='home'>
          <div className="container">
            <div className="title">
            {successMessage && <div style={{ color: 'blue' }}>{successMessage}</div>}

              <h2>Carrers</h2>
            </div>
            <ul className='job_list'>
              <li>
                <h4>id</h4>
                <h4>title</h4>
                <h4>department</h4>
                <h4>delete</h4>

              </li>
              {
                postList.map(post => (
                  <li key={post.id}>
                    <p>{post.id}</p>
                    <p>{post.title}</p>
                    <p>{post.department}</p>
                    <p id='delet_jop_icon' onClick={() => deleteJob(post.id)}>
                      <img width={25} src="../../../delet.png" alt="" />
                    </p>                 
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

  )
}
