import React, { useContext, useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { GlobalContext } from "../../context";
import axios from "axios";
import logoLogin from "../../img/LogoLogin.svg";
import "./login.scss";
import "./media.scss";

const Login = () => {
  const { setProfil,setUsers } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const nav = useNavigate()
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
    }
  }, [emailError, passwordError]);

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

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://16.170.206.113:8000/oauth/login/", {
        email: email,
        password: password,
      })
      .then((response) => {
        nav('/favoriteSetings')
        setProfil(false);
        setUsers(true);
      })
      .catch((error) => {
        alert("Login error:", error.data);
      });
  };

  return (
    <div id="login">
      <div className="container">
        <div className="login">
          <div className="login__logo">
            <img src={logoLogin} alt="" />
            <h1>WELCOME TO IZDE.KG</h1>
          </div>
          <div className="login__block">
            <form className="login__block--price" onSubmit={handleLogin}>
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
              <p>
                We’ll call or text you to confirm your number. Standard message
                and data rates apply.
              </p>
              <Link to="/forgat">Forgot your password?</Link>
              <Link to="/oauth/register">Don’t have an account? Register</Link>
              <button disabled={!formValid} type="submit">
                Continue
              </button>
              <Link>
                <button className="btnGoogle">
                  <FcGoogle className="icon" />
                  Continue with Google
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
