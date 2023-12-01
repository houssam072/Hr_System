import React , {useState, useEffect, useContext} from 'react';

import '../../3-jop/listJop/listjop.css';
import Admin from '../../3-jop/sidebar/Admin';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { User } from '../../../Context';
import { useNavigate } from 'react-router-dom';




export default function ListJpb() {
const [postList, setPost] = useState([]);
const context = useContext(User);
const [successMessage, setSuccessMessage] = useState('');

// @ts-ignore
const token = context.auth;
  const nav = useNavigate();

  useEffect( () => {
    axios.get('http://127.0.0.1:8001/job/api/list_apply/',{
      headers:{
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },})
      .then(data => setPost(data.data))
  }, [])


const deleteApp = async(id) => {
  await axios.delete(`http://127.0.0.1:8001/job/api/delete_app/${id}/`,{
    headers:{
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },});
    
    
  const newData = await axios.get('http://127.0.0.1:8001/job/api/list_apply/', {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
  setPost(newData.data);
  setSuccessMessage('successfully delete application.');


}


  




  return (


        <div className='home'>
          <div className="container">
            <div className="title">
            {successMessage && <div style={{ color: 'red' }}>{successMessage}</div>}

              <h2>Job applications</h2>
            </div>
            <ul className='job_list'>
              <li>
                <h4>id</h4>
                <h4>f name</h4>
                <h4>l name</h4>
                <h4>birth</h4>
                <h4>department</h4>
                <h4>experiense</h4>
                <h4>delete</h4>
                <h4>show</h4>

              </li>
              {
                postList.map(post => (
                  <li key={post.id}>
                    <p>{post.id}</p>
                    <p>{post.first_name}</p>
                    <p>{post.last_name}</p>
                    <p>{post.birth_date}</p>
                    <p>{post.department}</p>
                    <p>{post.experiense} year</p>
                    <p id='delete_post_icon' onClick={() => deleteApp(post.id)}>
                      <img width={25} src="../../../delet.png" alt="" />
                    </p>     
                       
                    
                    <p id='details_post_icon'>
                    <Link to={`/detailApp/${post.id}`}>
                      <img width={25} src="../../../show.png" alt="" />
                    </Link>
                    </p>              
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

  )
}
