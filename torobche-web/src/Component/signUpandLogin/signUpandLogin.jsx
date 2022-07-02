import { useState } from 'react';
import './signUpandLoginStyle.css';
import React from 'react';
import {signUpApi, logInApi} from '../../api/auth';
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


const SignUpandLogin = () =>{

  const [registerSwitch, setRegisterSwitch] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["token"]);

  const onSubmit = async () => {
    if (registerSwitch) {
      const response = await signUpApi(username, email, password);
      if (response.status === 201) {
        alert('ثبت نام با موفقیت انجام شد');
        if(response.data.token) {
          setCookie("token", response.data.token);
        }
        console.log(cookies.token);
        navigate('/search');
      } else {
        alert('خطا در ثبت نام');
      }
    } else {
      // navigate('/search');
      const response = await logInApi(username, password);
      if (response.status === 200) {
        alert('ورود با موفقیت انجام شد');
        if(response.data.token) {
          setCookie("token", response.data.token);
        }
        console.log(cookies.token);
        navigate('/search');
      } else {
        alert('خطا در ورود');
      }
    }
  }

    
    return(
        <div className="register">
            <div className="register-header">
        <h3>{registerSwitch ? "ثبت نام" : "ورود"}</h3>
      </div>
      <div className="forms-container">
        {registerSwitch ? (
          <form className="signup">
            <div className="signup-inputs">
              <div className="username">
                <input
                  placeholder="username"
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  spellCheck="false"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="password">
                <div className="pass-input">
                  <input
                    type={`${isVisible ? "text" : "password"}`}
                    placeholder="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    spellCheck="false"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <i
                    className={`fa-solid fa-eye ${
                      isVisible ? "visible-eye" : null
                    }`}
                    onClick={() => {
                      setIsVisible(!isVisible);
                    }}
                  ></i>
                </div>
              </div>
              <div className="email">
                <input
                  placeholder="email"
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  spellCheck="false"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="signup-cta">
              <button className="cta-sned" onClick={onSubmit}>
                ثبت نام
              </button>
              <button
                className="cta-switch"
                onClick={(e) => {
                  e.preventDefault();
                  setRegisterSwitch(false);
                }}
              >
                قبلا در ترب حساب کاربری داشتم
              </button>
            </div>
          </form>
        ) : null}

        {registerSwitch ? null : (
          <form className="login">
            <div className="signup-inputs">
              <div className="email">
                <input
                  placeholder='username'
                  type="text"
                  autoComplete="off"
                  spellCheck="false"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="password">
                <div className="pass-input">
                  <input
                  placeholder='password'
                    type={`${isVisible ? "text" : "password"}`}
                    name="password"
                    id="password"
                    autoComplete="off"
                    spellCheck="false"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <i
                    className={`fa-solid fa-eye ${
                      isVisible ? "visible-eye" : null
                    }`}
                    onClick={() => {
                      setIsVisible(!isVisible);
                    }}
                  ></i>
                </div>
              </div>
            </div>
            <div className="signup-cta">
              <button className="cta-sned send2" onClick={onSubmit}>
                ورود
              </button>
              <button
                className="cta-switch"
                onClick={(e) => {
                  e.preventDefault();
                  setRegisterSwitch(true);
                }}
              >
                حساب کاربری جدید میسازم
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
    )
}
export default SignUpandLogin;
