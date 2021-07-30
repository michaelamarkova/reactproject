import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content">
      <img src="images/user.png" alt="user_avatar"></img>
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>
          Sign up with us today!
        </h1>
        <h2>Create your account by filling out the information below.</h2>
        <div className="form-inputs">
          <label className="form-label">Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        {}{" "}
        {
          <Button
            className="form-input-btn"
            type="submit"
          >
            Sign up
          </Button>
        }
        <span className="form-input-login">
          Already have an account? Login <Link to="/">here</Link>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
