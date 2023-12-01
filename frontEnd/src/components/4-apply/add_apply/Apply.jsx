import { User } from "../../../Context";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Apply() {

  const [first_name, setFirstName] = useState("");
  const [last_name, setlastName] = useState("");
  const [birth_date, setBirthDate] = useState("");
  const [department, setDepartment] = useState("");
  const [experiense, setExperiense] = useState("");
  const [cv, setCv] = useState(null);
  const [job_title, setJopTitle] = useState('');
  const [job_list, setJobList] = useState([]);  
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const context = useContext(User);
  const nav = useNavigate();

  // @ts-ignore
  const token = context.auth;
  console.log('token :',token);


  useEffect(() => {
    axios.get("http://127.0.0.1:8001/job/api/list_job/", { 
      headers:{
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((data) => setJobList(data.data));
  }, []);

  async function Submit(e) {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("birth_date", birth_date);
    formData.append("department", department);
    formData.append("experiense", experiense);
    formData.append("cv", cv);
    formData.append("job", job_title);

    console.log(formData.get("first_name"));
    console.log(formData.get("last_name"));
    console.log(formData.get("birth_date"));
    console.log(formData.get("department"));
    console.log(formData.get("experiense"));
    console.log(formData.get("cv"));
    console.log(formData.get("job"));

    try{
        let res = await axios.post(
            'http://127.0.0.1:8001/job/api/apply_job/',
            formData,{ 
              headers:{
                Accept: "application/json",
                Authorization: "Bearer " + token,
              },
            })
            setSuccessMessage('successfully application.');
            setTimeout(() => {
    
            nav('/')
              
            }, 1000);
            
    }catch (error) {
      setSuccessMessage('failed application for jop try again.');
  }

  }

  return (
    <div className="register">
      <div className="container ">
          {successMessage && <div style={{ color: 'blue' }}>{successMessage}</div>}
          {errorMessage && <div style={{ color: 'blue' }}>{errorMessage}</div>}

        <h1 className="title">New Job</h1>
        <form action="" onSubmit={Submit}>
          <label htmlFor="title">First name:</label>
          <input
            type="text"
            placeholder="Enter Your First name please"
            name="first_name"
            id="first_name"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor="title">Last name:</label>
          <input
            type="text"
            placeholder="Enter Your Last name please"
            name="last_name"
            id="last_name"
            value={last_name}
            onChange={(e) => setlastName(e.target.value)}
          />


        <label htmlFor="desc">Birth date:</label>
          <input
            type="date"
            placeholder="Enter Your job Birth date please"
            name="birth_date"
            id="birth_date"
            value={birth_date}
            onChange={(e) => setBirthDate(e.target.value)}
          />

        <label htmlFor="title">Experience:</label>
        <input type="number" name = 'experience' id = 'experience' value={experiense} onChange={(e) => setExperiense(e.target.value)} />


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

          <label htmlFor="department">job title:</label>

          <select id="job_title" name = 'job_title' value={job_title} onChange={ (e) => {setJopTitle(e.target.value)}}>
          <option value="">--Please choose an job title--</option>

            {
                job_list.map(option => (
                    <option key={option.id} value={option.id}>{option.title}</option>
                ))
            }

          </select>
          <br />

          <label htmlFor="image">Cv {"(just pdf, docs files)"}:</label>
          <input
            type="file"
            placeholder="Enter Your Cv please"
            name=""
            id="cv"
            accept=".pdf, .Docs, .docx"
            onChange={(e) => setCv(e.target.files[0])}
          />



          <div style={{ textAlign: "center" }}>
            <button id="submit" type="submit">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
}
