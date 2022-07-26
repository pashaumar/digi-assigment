import React, { useState } from "react";
import GenericLogo from "../../assets/genericLogo.png";
import DigioLogo from "../../assets/digioLogo.jpg";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const emailRegex = /\S+@\S+\.\S+/;

  const navigate = useNavigate();

  const handleContinueClick = () => {
    if (!emailRegex.test(email)) {
      setError("Invalid Email");
      return;
    }
    setError("");
    navigate("/document");
  };

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.header}>
          <div className={classes.headingWrapper}>
            <div>Sign document using</div>
            <div>email</div>
          </div>
          <div className={classes.genericLogo}>
            <img src={GenericLogo} alt="GenericLogo" />
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.googleSection}>
            <div>sanket@digio.in uses Gmail?</div>
            <div>login using Google</div>
            <button className={classes.googleButton}>Google</button>
          </div>
          <div className={classes.or}>
            <div />
            <div>OR</div>
            <div />
          </div>
          <div className={classes.inputSection}>
            <div>Proceed with your email address</div>
            <input
              className={classes.input}
              value={email}
              onChange={(e) => {
                const { value } = e.target;
                setEmail(value);
              }}
              placeholder="Enter Your Email"
            />
            {error && <div className={classes.error}>{error}</div>}
            <div className={classes.continueSection}>
              <div>
                By continuing, I confirm to the Terms and Service and Privacy
                Policy of Digio.in
              </div>
              <button
                className={classes.continueButton}
                onClick={handleContinueClick}
                disabled={!email}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
        <div className={classes.footer}>
          <div className={classes.leftSection}>
            <img src={DigioLogo} alt="DigioLogo" />
            <div>
              <div>Powered By</div>
              <a
                href="https://www.digio.in/#/index"
                target="_blank"
                rel="noreferrer"
              >
                www.digio.in
              </a>
            </div>
          </div>
          <div>1/3 steps</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
