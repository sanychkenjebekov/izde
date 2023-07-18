import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../../context";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TiTick } from "react-icons/ti";
import logoLogin from "../../img/LogoLogin.svg";
import "./index.scss";
import "./media.scss";

const Login = () => {
  const { setProfil, login, setUsers } = useContext(GlobalContext);
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [confirmPasswordError, setConfirmPasswordError] = useState(
    "Подтверждение пароля не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
    if (e.target.value.length < 8 || e.target.value.length > 128) {
      setPasswordError("Пароль должен содержать от 8 до 128 символов");
    } else {
      setPasswordError("");
    }
  };

  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError("Пароли не совпадают");
    } else {
      setConfirmPasswordError("");
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
      case "confirmPassword":
        setConfirmPasswordDirty(true);
        break;
      default:
        break;
    }
  };

  const formPost = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
      confirm_password: confirmPassword,
    };

    axios
      .post("http://16.170.206.113:8000/oauth/register/", data)
      .then((response) => {
        console.log("User registered successfully:", response.data);
        setUsers(true);
        setProfil(false);
        if (!modal) {
          setModal(true);
          window.setTimeout(() => {
            setModal(false);
            nav("/oauth/login");
          }, 3000);
        }
      })
      .catch((error) => {
        console.error("Registration error:", error);
      });
  };

  useEffect(() => {
    setFormValid(
      emailError === "" && passwordError === "" && confirmPasswordError === ""
    );
  }, [emailError, passwordError, confirmPasswordError]);

  useEffect(() => {
    if (emailError || passwordError || confirmPasswordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
      login();
    }
  }, [emailError, passwordError, confirmPasswordError]);

  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  useEffect(() => {
    localStorage.setItem("password", password);
  }, [password]);

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
                  type="email"
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
                <h4 className="iconsGlaza1" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </h4>
                {passwordDirty && passwordError && (
                  <div className="password1">{passwordError}</div>
                )}
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={confirmPasswordHandler}
                  onBlur={blurHandler}
                  required
                  placeholder="Confirm Password"
                  style={{
                    border:
                      confirmPasswordDirty && confirmPasswordError
                        ? "1px solid #f44336"
                        : "",
                  }}
                />
                {confirmPasswordDirty && confirmPasswordError && (
                  <div className="password2">{confirmPasswordError}</div>
                )}
              </div>
              <Link to="/forgot">Forgot your password?</Link>

              <button onClick={formPost} disabled={!formValid}>
                Continue
              </button>
              <div
                style={{
                  display: modal ? "flex" : "none",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "37%",
                  top: "50%",
                  width: "500px",
                  height: "200px",
                  background: "#004A60",
                  zIndex: 1,
                  fontSize: "18px",
                  color: "#fff",
                  textAlign: "center",
                  borderRadius: "10px",
                }}
              >
                Вы успешно зарегистрировались! <br />
                <TiTick style={{ width: "30px", height: "30px" }} />
              </div>
              <Link to="#">
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
          display: modal ? "block" : "none",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "300px",
            height: "150px",
            background: "#004A60",
            borderRadius: "10px",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Вы успешно зарегистрировались! <br />
          <TiTick style={{ width: "30px", height: "30px" }} />
        </div>
      </div>
    </div>
  );
};

export default Login;
