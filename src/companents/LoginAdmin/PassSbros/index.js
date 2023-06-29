import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../../img/LogoLoginAdmin.svg";

function PassSbros() {
  const [color, setColor] = useState(false);
  const [color2, setColor2] = useState(true);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current.length > 0) {
      inputRefs.current[0].focus();
    }
  }, []);

function handleInput(event, index) {
  let value = event.target.value.slice(0, 1);
  event.target.value = value;

  if (value && index < inputRefs.current.length - 1) {
    inputRefs.current[index + 1].focus();
  } else if (!value && index > 0) {
    inputRefs.current[index - 1].focus();
  }
}


  return (
    <div id="passSbros">
      <div className="container">
        <div className="passSbros">
          <img src={logo} alt="" />
          <div className="passSbros__block">
            <h1>Enter 4 digit code</h1>
            <p>
              A four-digit code should have come to your email address that you
              indicated.
            </p>
            <form className="passSbros__block-pass">
              {[0, 1, 2, 3].map((index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="number"
                  maxLength={1}
                  className="number"
                  onInput={(event) => handleInput(event, index)}
                />
              ))}
            </form>

            <form className="passSbros__block-form">
              <Link
                onClick={() => {
                  setColor(false);
                  setColor2(true);
                }}
                style={{
                  background: color2 ? "#1b76f9" : "none",
                  border: "2.683px solid #4280ef",
                  color: color2 ? "#fff" : "#4280ef",
                }}
                className="Continue"
              >
                Confirm
              </Link>
              <Link
                onClick={() => {
                  setColor(true);
                  setColor2(false);
                }}
                style={{
                  background: color ? "#1b76f9" : "none",
                  border: "2.683px solid #4280ef",
                  color: color ? "#fff" : "#4280ef",
                }}
                className="Continue2"
              >
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PassSbros;