import React, { useState, useEffect } from "react";
import classes from "./Document.module.css";
import { documentText } from "./constant";
import Modal from "../Modal";

const Document = () => {
  const [open, setOpen] = useState(true);
  const [isAadhaarVerified, setIsAadhaarVerified] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [input, setInput] = useState({
    aadhaar: "",
    otp: "",
    checkbox: false,
  });
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    setVerified(isOtpVerified && isAadhaarVerified);
    setTimeout(() => {
      setVerified(false);
    }, 3000);
  }, [isAadhaarVerified, isOtpVerified]);

  const handleAadhaarVerify = (verifyAadhaar) => {
    setIsAadhaarVerified(verifyAadhaar);
  };

  const handleOtpVerify = (verifyOtp) => {
    setIsOtpVerified(verifyOtp);
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: name === "checkbox" ? checked : value,
    }));
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className={classes.container}>
      <Modal
        open={open}
        closeModal={closeModal}
        input={input}
        handleChange={handleChange}
        handleAadhaarVerify={handleAadhaarVerify}
        handleOtpVerify={handleOtpVerify}
        isAadhaarVerified={isAadhaarVerified}
        isOtpVerified={isOtpVerified}
      />
      {isAadhaarVerified && isOtpVerified && (
        <div className={classes.signedHeading}>
          {verified ? "Signing..." : "Singed"}
        </div>
      )}
      {verified && (
        <div className={classes.verifiedMessage}>
          {"Aadhaar Verified Successfully"}
        </div>
      )}
      <div className={classes.document}>
        <div className={classes.title}>Document</div>
        <div className={classes.content}>
          {documentText} {documentText}
        </div>
      </div>
      <div className={classes.requestButton}>
        <button
          onClick={() => setOpen(true)}
          disabled={isAadhaarVerified && isOtpVerified}
        >
          Request OTP to Sign
        </button>
      </div>
    </div>
  );
};

export default Document;
