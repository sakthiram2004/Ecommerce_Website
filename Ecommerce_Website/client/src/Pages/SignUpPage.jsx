import React from "react";
import "../Styles/SignUpPage.css";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="signup">
      <form action="" className="signup__form">
        <h1 className="signup__form__title">SIGN UP</h1>
        <div className="signup__form__input">
          <label htmlFor="name">NAME:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            name="name"
          />
        </div>
        <div className="signup__form__input">
          <label htmlFor="email">EMAIL:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            name="email"
          />
        </div>
        <div className="signup__form__input">
          <label htmlFor="phone">PHONE NO:</label>
          <input
            type="tele"
            id="phone"
            placeholder="Enter Your Phone No"
            name="phone"
          />
        </div>
        <div className="signup__form__input">
          <label htmlFor="password">PASSWORD:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            name="password"
          />
        </div>
        <div className="signup__form__input">
          <label htmlFor="confirm-password">CONFIRM PASSWORD:</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm Your Password"
            name="confirm-password"
          />
        </div>
        <div className="signup__form__submit">
          <button>REGISTER</button>
        </div>
        <p className="signup__form__login">
          Already have an account?<Link to="/login">Log in</Link>
        </p>
        <Link to="/">back to home</Link>
      </form>
    </div>
  );
};

export default SignUpPage;
