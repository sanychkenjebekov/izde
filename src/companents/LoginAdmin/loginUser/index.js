import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../img/LogoLoginAdmin.svg";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
function LoginUser() {
  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("Username не может быть пустым");
  //
  const [formValid, setFormValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  });
   const emailHandler = (e) => {
     setEmail(e.target.value);
     const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     if (!re.test(String(e.target.value).toLowerCase())) {
       setEmailError("Некорректный e-mail");
     } else {
       setEmailError("");
     }
   };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 12) {
      setPasswordError("Пароль должен содержать от 3 до 12 символов");
    } else {
      setPasswordError("");
    }
  };

 const blurHandler = (e) => {
   switch (e.target.name) {
     case "email":
       setEmailDirty(true);
       break;
     case "password":
       setPasswordDirty(true);
       break;
     default:
       break;
   }
 };
  return (
    <div id="loginUser">
      <div className="container">
        <div className="loginUser">
          <img src={logo} alt="" />
          <div className="loginUser__block">
            <h1>Log in</h1>
            <form className="loginUser__block-form">
              <input
                type="text"
                name="email"
                value={email}
                onChange={emailHandler}
                onBlur={blurHandler}
                required
                placeholder="Username"
                style={{
                  border: emailDirty && emailError ? "1px solid #f44336" : "",
                }}
              />
              {emailDirty && emailError && (
                <div className="email">{emailError}</div>
              )}
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={passwordHandler}
                onBlur={blurHandler}
                required
                placeholder="Password"
                style={{
                  border:
                    passwordDirty && passwordError ? "1px solid #f44336" : "",
                }}
              />
              <h4 className="iconsGlaza" onClick={togglePasswordVisibility}>
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </h4>
              {passwordDirty && passwordError && (
                <div className="password">{passwordError}</div>
              )}
              <Link to={"/forgat"} className="forgot">
                Forgot your password?
              </Link>
              <Link className="login">Log in</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUser;
