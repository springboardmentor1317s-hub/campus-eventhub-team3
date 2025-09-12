import React from "react";
import "./Login.css";   // import the css file

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to CampusEventHub</h2>

        <form>
          <div>
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div>
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
