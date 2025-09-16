import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Top Icon */}
        <div className="login-icon">
          <span className="icon">+</span>
        </div>

        {/* Title */}
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">
          Sign in to your CampusEventHub account
        </p>

        {/* Form */}
        <form>
          {/* Email Input */}
          <label>Email Address</label>
          <div className="input-group">
            <input type="email" placeholder="Enter your email" required />
          </div>

          {/* Password Input */}
          <label>Password</label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              required
            />
            <span
              className="input-eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {/* Button */}
          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="signup-text">
          Don’t have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
