import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

// Login component with email and password fields
function LoginModal({ isOpen, onClose, onSwitch, onLogin }) {
  // State for form values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // State to simulate an error for design purposes (logic comes later)
  const [isError] = useState(false);

  // Clear form when the modal opens/closes
  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);

  // Handlers to update state
  const handleEmailchange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
    // Future change: put API check here before calling onLogin
    console.log("Logging in with:", email, password);
  };

  const isFormValid = email !== "" && password !== "";

  return (
    <ModalWithForm isOpen={isOpen} onClose={onClose}>
      <div className="login">
        <h2 className="login__title">Sign in</h2>
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
          {/* Error Message section */}
          <span
            className={`login__error-message ${isError ? "login__error-message_visible" : ""}`}
          >
            Invalid email address
          </span>
          <label className="login__label">Password</label>
          <input
            type="password"
            className="login__input"
            placeholder="Enter password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            type="submit"
            disabled={!isFormValid}
            className={`login__button ${!isFormValid ? "login__button_disabled" : ""}`}
          >
            Sign in
          </button>
        </form>
        <p className="login__switch">
          or{" "}
          <button
            type="button"
            className="login__switch-button"
            onClick={onSwitch}
          >
            Sign up
          </button>
        </p>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
