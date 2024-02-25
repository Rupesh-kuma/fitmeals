import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Login/authContext";

const Login = () => {
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setemailError] = useState();

  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");
  const { login } = useAuth();
  const history = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      e.target["email"].value == storedEmail &&
      e.target["password"].value == storedPassword
    ) {
      console.log("Login Successfully");
      login('0123456789abcdefghijklmnopqrstuvwxyz');
      history("/");
    } else {
      if (e.target["password"].value !== storedPassword) {
        setPasswordError("Password is incorrect");
      }
      if (e.target["email"].value !== storedEmail) {
        setemailError("Email is not matched");
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="offset-md-3 col-md-6 mt-5">
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
              <p style={{ color: "red" }}>{emailError}</p>
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                required
              />
              <p style={{ color: "red" }}>{passwordError}</p>
            </div>
            <div className="d-flex justify-content-around">
              <button type="submit" className="btn btn-danger">
                Login
              </button>
            </div>
            <div className="text-center">
              <p>
                Not a member? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
