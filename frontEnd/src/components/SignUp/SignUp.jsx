// @ts-nocheck
import React, { useContext, useState } from "react";
import "./signUp.css";
import axios from "axios";
import { User } from "../../Context";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [flag, setFlag] = useState(true);
  const userNow = useContext(User);
  const nav = useNavigate();
  
  console.log(userNow);


  async function Submit(e) {
    e.preventDefault();
    setAccept(true);
    if (name === "" || password.length < 8 || rpassword !== password) {
      setFlag(false);
    }
    if (flag) {
      let res = await axios.post("http://127.0.0.1:8001/auth/register/", {
        username: name,
        email: email,
        password: password,
        password2: rpassword,
      });

      userNow.setAuth('stored')
      console.log(res);
      if (res.status === 201) {
        const { message, staff } = res.data;
        nav('/login')
        
      }
    }
  }
  return (
    <div className="signUp">
      <div className="register">
        <h1>Register</h1>
        <form action="" onSubmit={Submit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter Your full name please"
            name=""
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {name === "" && accept && (
            <p className="error">please enter your name</p>
          )}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Enter Your Email please"
            name=""
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Enter Your Password please"
            name=""
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.length < 8 && accept && (
            <p className="error">Password must be more 8 Charectares</p>
          )}

          <label htmlFor="rpassword">Confirm Password:</label>
          <input
            type="password"
            placeholder="Enter Your Password again please"
            name=""
            id="rpassword"
            value={rpassword}
            onChange={(e) => setRpassword(e.target.value)}
          />
          {rpassword.length < 8 && accept && (
            <p className="error">Password must be more 8 Charectares</p>
          )}
          {rpassword !== password && accept && (
            <p className="error">Password does not match</p>
          )}

          <div style={{ textAlign: "center" }}>
            <button id="submit" type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
