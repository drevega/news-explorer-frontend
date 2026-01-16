import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterSuccessModal.css";

function RegisterSuccessModal({ isOpen, onClose, onSwitch }) {
  return (
    <ModalWithForm isOpen={isOpen} onClose={onClose}>
      <div className="register-success">
        <h2 className="register-success__title">
          Registration successfully completed!
        </h2>
        <button
          type="button"
          className="register-success__link"
          onClick={onSwitch}
        >
          Sign in
        </button>
      </div>
    </ModalWithForm>
  );
}

export default RegisterSuccessModal;
