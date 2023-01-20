import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Login from "../../assets/images/login.svg";
import Parol from "../../assets/images/parol.svg";
import "./main.css";
import { useEffect } from "react";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [parol, setParol] = useState("");

  const formSubmit = async (evt) => {
    evt.preventDefault();

    let data = await axios({
      method: "POST",
      url: "http://localhost:5000/login",
      headers: {
        "content-type": "application/json",
      },
      data: {
        login,
        parol,
      },
    });

    window.localStorage.setItem("token", data.data["access_token"]);
  };

  return (
    <div className='container'>
      <div className='login-logo-box'>
        <NavLink className='logo' to='/'>
          Pressa
        </NavLink>
      </div>
      <div className='login-box'>
        <h2 className='login-title'>Tizimga kirish</h2>
        <form onSubmit={formSubmit} method='post'>
          <div className='input-box'>
            <img className='input-img' src={Login} alt='Login' />
            <input
              className='input-aria'
              type='text'
              aria-label='Login'
              placeholder='Login'
              onChange={(evt) => setLogin(evt.target.value)}
            />
          </div>
          <div className='input-box'>
            <img className='input-img' src={Parol} alt='Parol' />
            <input
              className='input-aria'
              type='text'
              aria-label='Parol'
              placeholder='Parol'
              onChange={(evt) => {
                setParol(evt.target.value);
              }}
            />
          </div>
          <button className='login-btn' type='submit'>
            Kirish
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
