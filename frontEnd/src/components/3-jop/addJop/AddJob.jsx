// @ts-nocheck
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import './addJob.css';
import Admin from "../sidebar/Admin";
import { User } from "../../../Context";

export default function AddJob() {
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const context = useContext(User);
  const token = context.auth;
  const nav = useNavigate();


  async function Submit(e) {
    e.preventDefault();


    const formData = new FormData();
    formData.append("title", title);
    formData.append("department", department);
    formData.append("desc", description);
    formData.append("image", image);

    console.log(formData.get("title"));
    console.log(formData.get("department"));
    console.log(formData.get("desc"));

    try {
      let res = await axios.post(
        "http://127.0.0.1:8001/job/api/add_job/",
        formData,{ 
        headers:{
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },}
      );
        setSuccessMessage('successfully added jop.');
        setTimeout(() => {

        nav('/')
          
        }, 1000);
    } catch (error) {        
      setSuccessMessage('failed added jop try again.');

    }
  }

  return (
        <div className="register">
          <div className="container ">
          {successMessage && <div style={{ color: 'blue' }}>{successMessage}</div>}
          {errorMessage && <div style={{ color: 'blue' }}>{errorMessage}</div>}

            <h1 className="title">New Job</h1>
            <form action="" onSubmit={Submit}>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                placeholder="Enter Your Job title please"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <label htmlFor="department">Department:</label>

              <select
                id="department"
                name="department"
                value={department}  
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="">--Please choose an department--</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
              </select>

              <label htmlFor="desc">Description:</label>
              <input
                type="text"
                placeholder="Enter Your job Description please"
                name=""
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <label htmlFor="image">Image:</label>
              <input
                type="file"
                placeholder="Enter Your job Image please"
                name=""
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <div style={{ textAlign: "center" }}>
                <button id="submit" type="submit">Add</button>
              </div>
            </form>
          </div>
        </div>
  );
}
