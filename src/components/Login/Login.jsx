import React from "react";
import "./Login.css";

// Login component with email and password fields
function Login() {
  return (
    <div className="login">
      <h2 className="login__title">Sign in</h2>
      <form className="login__form">
        <label className="login__label">Email</label>
        <input
          type="email"
          className="login__input"
          placeholder="Enter email"
          required
        />
        <label className="login__label">Password</label>
        <input
          type="password"
          className="login__input"
          placeholder="Enter password"
          required
        />
        <button type="submit" className="login__btn">
          Sign in
        </button>
      </form>
      <p className="login__switch">
        or{" "}
        <button type="button" className="login__switch-btn">
          Sign up
        </button>
      </p>
    </div>
  );
}

export default Login;
