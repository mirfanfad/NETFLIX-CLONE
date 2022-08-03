import { useRef } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const history = useHistory();

  console.log(process.env.REACT_APP_APPLICATION_CODE);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log({ 1: password.current.value, 2: passwordAgain.current.value });
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Password don't match!");
    } else {
      const user = {
        Name: username.current.value,
        Email: email.current.value,
        Password: password.current.value,
        ApplicationCode: process.env.REACT_APP_APPLICATION_CODE,
        CallbackPage: process.env.REACT_APP_BASEURL + "/confirmEmail",
      };
      try {
        await axios
          .post(
            "http://scorpiopy.herokuapp.com/api/Operations/CreateUser",
            user
          )
          .then((res) => {
            if (res.data.status === "success") {
              // http://localhost:3000/confirmEmail?token=CfDJ8K1czib8RzpCiJ2asZt193IDcJOBJTkxCAY8RHwaeSP0RGoYvk8eim4wIPNzgVB%2FimnnTqtf9LDjwo1u39BcixfBsYWhFEvrGUOf483QhUFjlB7LTswvCdM5df%2FS%2FRKvScm56lhYHVcoIhnlV8iuN8HmSimnUIe3ueCxhN0jL91BtydqT79H4jaJKStZpZBV4li75qf0ghHeMXztFnjVEHFuiLWhoJJS4raVgYCOjASQRnCf90A9VHm9WBcq55myfA%3D%3D&email=mirfanfad10@gmail.com
              history.push("/sentEmail");
            } else {
              alert(res.data.message[0].description);
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    history.push("/login");
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
              required
              pattern="^[a-z0-9_\-]+$"
              type="text"
              placeholder="Username"
              className="loginInput"
              ref={username}
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="loginInput"
              ref={email}
            />
            <input
              required
              pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
              type="password"
              placeholder="Password"
              className="loginInput"
              ref={password}
            />
            <input
              required
              type="password"
              placeholder="Confirm Password"
              className="loginInput"
              ref={passwordAgain}
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton" onClick={handleLogin}>
              Log Into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
