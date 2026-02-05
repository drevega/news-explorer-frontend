import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../LoginModal/LoginModal.css";

function RegisterModal({ isOpen, onClose, onSwitch, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    setEmail("");
    setPassword("");
    setUsername("");
  }, [isOpen]);

  const handleEmailchange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);

  // State to simulate "Email unavailable error" for design purposes (logic comes later)
  const [isServerError] = useState(false); // Set to true to show error message

  const handleSubmit = (e) => {
    e.preventDefault();
    // If successful registration, onRegister prop to switch to success modal
    onRegister();
  };

  // Check if all fields are filled
  const isFormValid = email !== "" && password !== "" && username !== "";

  return (
    <ModalWithForm isOpen={isOpen} onClose={onClose} title="Sign up">
      <div className="login">
        <h2 className="login__title">Sign Up</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <label className="login__label">Email</label>
          <input
            type="email"
            className="login__input"
            placeholder="Enter email"
            required
            value={email}
            onChange={handleEmailchange}
            autoFocus
          />
          <label className="login__label">Password</label>
          <input
            type="password"
            className="login__input"
            placeholder="Enter password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <label className="login__label">Username</label>
          <input
            type="text"
            className="login__input"
            placeholder="Enter your username"
            required
            value={username}
            onChange={handleUsernameChange}
          />

          {/* Server error message */}
          {isServerError && (
            <span className="login__server-error">
              This email is not available
            </span>
          )}

          <button
            type="submit"
            disabled={!isFormValid}
            className={`login__button ${!isFormValid ? "login__button_disabled" : ""}`}
          >
            Sign up
          </button>
        </form>
        <p className="login__switch">
          or{" "}
          <button
            className="login__switch-button"
            type="button"
            onClick={onSwitch}
          >
            Sign in
          </button>
        </p>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
