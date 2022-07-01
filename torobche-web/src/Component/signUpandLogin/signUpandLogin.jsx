import { useState } from 'react';
import './signUpandLoginStyle.css'


const SignUpandLogin = () =>{

  const [registerSwitch, setRegisterSwitch] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

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
                />
              </div>
            </div>
            <div className="signup-cta">
              <button className="cta-sned">
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
                  placeholder='email'
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  spellCheck="false"
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
              <button className="cta-sned send2">
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
