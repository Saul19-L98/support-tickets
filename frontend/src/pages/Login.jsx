import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function Login() {
  const initialState = {
    email: "",
    password: "",
  };
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState(initialState);

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    //Redirect when logged in
    console.log(isSuccess);
    if (isSuccess && user) {
      toast.success("Log in Successful 😃");
      navigate("/");
    }
    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Plase Log in to get Support</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Enter password"
              required
            />
            <img
              src={visibilityIcon}
              alt="show password"
              className="showPassword"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
