import React, { useState } from "react";
import { Dialog } from "@mui/material";
import classes from "./Modal.module.css";
import AadhaarLogo from "../../assets/aadharLogo.png";

const Modal = (props) => {
  const {
    open,
    closeModal,
    handleChange,
    input,
    handleOtpVerify,
    handleAadhaarVerify,
    isAadhaarVerified,
  } = props;

  return (
    <Dialog open={open} className={classes.modal} onClose={() => {}}>
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={classes.heading}>Register Aadhaar</div>
          <div className={classes.closeModal} onClick={closeModal}>
            x
          </div>
        </div>
        <div className={classes.inputSection}>
          <div className={classes.aadhaarInputWrapper}>
            <img
              src={AadhaarLogo}
              alt="AadhaarLogo"
              className={classes.aadhaarLogo}
            />
            <input
              type="number"
              className={classes.aadhaarInput}
              placeholder="Enter Aadhaar"
              name="aadhaar"
              value={input.aadhaar}
              onChange={handleChange}
            />
            <button
              className={classes.verifyButton}
              disabled={!input.aadhaar || input.aadhaar.length !== 16}
              onClick={() => {
                if (input.aadhaar.length === 16) {
                  handleAadhaarVerify(true);
                } else {
                  handleAadhaarVerify(false);
                }
              }}
            >
              Verify
            </button>
          </div>
          <div className={classes.wrapper}>
            <div className={classes.termsWrapper}>
              <input
                type="checkbox"
                name="checkbox"
                value={input.checkbox}
                onChange={handleChange}
              />
              <div>
                I agree to eSign this <span>KYC document</span> to get started
              </div>
            </div>
            <div className={classes.otpWrapper}>
              <div className={classes.otpInput}>
                <input
                  type="number"
                  name="otp"
                  value={input.otp}
                  onChange={handleChange}
                  placeholder="OTP"
                />
              </div>
              <button
                className={classes.verifyButton}
                disabled={!input.checkbox || !input.otp || !isAadhaarVerified}
                onClick={() => {
                  if (input.otp === "123456") {
                    handleOtpVerify(true);
                    if (isAadhaarVerified) {
                      closeModal();
                    }
                  } else {
                    handleOtpVerify(false);
                  }
                }}
              >
                Submit
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
