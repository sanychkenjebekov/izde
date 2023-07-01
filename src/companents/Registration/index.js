import "./index.scss";
import './media.scss';
import React, { useContext, useEffect, useState } from "react";
import logoLogin from "../../img/LogoLogin.svg";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { GlobalContext } from "../../context";
import { TiTick } from "react-icons/ti";

const Login = () => {
  const { setProfil, login } = useContext(GlobalContext);
  const { setUsers } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false)
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
      login();
    }
  });


  // useEffect(() => {
  //     setFormValid(emailError === "" && passwordError === "");
  // }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный e-mail");
    } else {
      setEmailError("");
    }
  };

  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  useEffect(() => {
    localStorage.setItem("password", password);
  }, [password]);

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
  const userBlock = () => {
    setUsers(true);
    setProfil(false);
    if(modal === false){
      setModal(true)
      window.setTimeout(()=>{
        setModal(false)
         nav("/login");
      },3000)
    }
  };
  // const modalClick = () => {
  //   window.setTimeout(() => {
  //     setModal(!modal);
  //   }, 5000);
  //   //
  // }
  return (
    <div id="login">
      <div className="container">
        <div className="login">
          <div className="login__logo">
            <img src={logoLogin} alt="" />
            <h1>WELCOME TO IZDE.KG</h1>
          </div>
          <div className="login__block">
            <div className="login__block--price">
              <h1>Registration</h1>
              <div className="login__block--price__form">
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={emailHandler}
                  onBlur={blurHandler}
                  required
                  placeholder="Email"
                  style={{
                    border: emailDirty && emailError ? "1px solid #f44336" : "",
                  }}
                />
                {emailDirty && emailError && (
                  <div className="email">{emailError}</div>
                )}
              </div>
              <div className="login__block--price__form">
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
              </div>
              <Link to="/forgat">Forgot your password?</Link>

              <button onClick={userBlock} disabled={!formValid}>
                Continue
              </button>
              <div
                style={{
                  display: modal ? 'flex' : "none",
                  // display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: "absolute",
                  left: "37%",
                  top: "50%",
                  width: "500px",
                  height: "200px",
                  background: "#004A60",
                  zIndex: 1,
                  fontSize: "18px",
                  color: "#fff",
                  textAlign: 'center',
                  borderRadius: '10px',
                }}
              >
                Вы успешно зарегистрировалиль! <br/>
                <TiTick style={{
                  width: '30px',
                  height: '30px'
                }}/>
              </div>
              <Link>
                <button className="btnGoogle">
                  <FcGoogle className="icon" />
                  Continue with Google
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: modal ? modal : "none",
          position: "absolute",
          top: 0,
          backdropFilter: "blur(15px)",
          background: "#004a60",
          width: "100%",
          height: "125%",
          opacity: 0.5,
        }}
      ></div>
    </div>
  );
};

export default Login;
