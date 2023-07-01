import "./login.scss";
import "./media.scss";
import React, { useContext, useEffect, useState } from "react";
import logoLogin from "../../img/LogoLogin.svg";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { GlobalContext } from "../../context";

const Login = () => {
  const { setProfil, login } = useContext(GlobalContext);
  const { setUsers } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
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
            <form className="login__block--price">
              {/* <h1>Log in</h1> */}
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
              <Link to="/registration">Don’t have an account? Register</Link>
              <Link to="/favoriteSetings">
                <button onClick={userBlock} disabled={!formValid} type="submit">
                  Continue
                </button>
              </Link>
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
