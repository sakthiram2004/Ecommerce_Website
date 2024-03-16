import React from "react";
import "../Styles/LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login">
      <form action="" className="login__form">
        <h1 className="login__form__title">LOGIN</h1>
        <div className="login__form__input">
          <label htmlFor="name">EMAIL:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Email"
            name="email"
          />
        </div>
        <div className="login__form__input">
          <label htmlFor="name">PASSWORD:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Password"
            name="password"
          />
        </div>
        <span className="login__form__forgetpassword">
          <Link>Forget Password?</Link>
        </span>
        <div className="login__form__submit">
          <button>LOGIN</button>
        </div>
        <div className="login__form__signup">
          <p>
            Already have an account?<Link to="/signup">Signup</Link>
          </p>
        </div>
        <Link to="/">back to home</Link>
      </form>
    </div>
  );
};

export default LoginPage;
