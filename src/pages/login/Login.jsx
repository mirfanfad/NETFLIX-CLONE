import { useRef } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();

    axios
      .post("http://scorpiopy.herokuapp.com/api/Account/Login", {
        Email: email.current.value,
        Password: password.current.value,
        ReturnUrl: "/",
      }, {withCredentials:true})
      .then((res) => {
        console.log(res);
        if (res.data.status === "success") {
          // history.push("/");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Account not found, create a new account!");
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    history.push("/register");
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Movie App</h3>
          <span className="loginDesc">
            Watch your favorite movie just on Movie App.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              type="email"
              placeholder="Email"
              className="loginInput"
              ref={email}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              ref={password}
              required
              pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
            />
            <button className="loginButton" type="submit">
              {"Sign In"}
            </button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegisterButton" onClick={handleRegister}>
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
