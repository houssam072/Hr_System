// @ts-nocheck
import React , {useState, useEffect,useContext, runUseEffect} from 'react';

import { Link } from 'react-router-dom';
import {User} from '../../Context'



import './home.css'
import axios from 'axios';




export default function Home() {
  const [postList, setPost] = useState([]);
  const context = useContext(User);
  const token = context.auth;


  useEffect( () => {
    axios.get('http://127.0.0.1:8001/job/api/list_job/',{
      headers:{
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    })
    .then((data) => setPost(data.data))
  }, [])



  return (
    <div className='home'>
      <div className="container">
        <div className="title">
          <h2>Carrers</h2>
        </div>
        <div className="jobList">
          {
            postList.map(post => (

              <div id='job' className='job' key={post.id}>
                {<img src={post.image} alt={post.title} />}
                <h2> {post.title}</h2>
                <p> department: {post.department}</p>
                <Link id='readMore' className='readMore' to={`/detailJob/${post.id}`}>read more {'>>'} </Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>

  )
}
