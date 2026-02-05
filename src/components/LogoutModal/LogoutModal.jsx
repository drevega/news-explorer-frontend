import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../LoginModal/LoginModal.css";
import "./logoutModal.css";

function LogoutModal({ isOpen, onClose, onSwitch }) {
  return (
    <ModalWithForm isOpen={isOpen} onClose={onClose}>
      <div className="login logout-content">
        <h2 className="login__title logout__title">Successfully logged out</h2>

        {/* Link to re-open Sign In if user wants */}
        <p className="login__switch-button logout__link">
          <button
            type="button"
            className="login__switch-button lohout__link"
            onClick={onSwitch}
          >
            Sign in
          </button>
        </p>
      </div>
    </ModalWithForm>
  );
}

export default LogoutModal;
