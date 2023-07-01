import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../img/LogoLoginAdmin.svg";
function ForgatPass() {
  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("email не может быть пустым");

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError) {
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
  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      default:
        break;
    }
  };
  return (
    <div id="forgatPass">
      <div className="container">
        <div className="forgatPass">
          <img src={logo} alt="" />
          <div className="forgatPass__block">
            <h1>Forgot password</h1>
            <p>
              Enter your email for the verification process, we will send code
              to your email
            </p>
            <form className="forgatPass__block-form">
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
              <Link to={"/LoginAdmin"} className="forgot">Back to login</Link>
              <Link to={'/PassSbros'} className="Continue">Continue</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgatPass;
