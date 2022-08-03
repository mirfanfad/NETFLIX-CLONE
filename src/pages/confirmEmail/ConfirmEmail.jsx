import axios from "axios";
import React from "react";
import { useHistory } from "react-router";
import "./confirmEmail.css";

export default function ConfirmEmail({ confirm }) {
  const history = useHistory();
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");
  const email = params.get("email");

  const confirmButton = () => {
    if (token && email) {
      axios
        .post("http://scorpiopy.herokuapp.com/api/Account/ConfirmEmail", {
          Token: token,
          Email: email,
          callbackPage: process.env.REACT_APP_BASEURL + "/confirmEmail",
        })
        .then((res) => {
          if (res.data.status === "success") {
            alert(res.data.message);
            history.push("/login");
          } else {
            alert(res.data.message);
          }
        });
    }
  };

  if (confirm) {
    return (
      <div className="confirmEmail">
        <img
          src="https://img.icons8.com/fluency/144/000000/microsoft-todo-2019.png"
          alt=""
          style={{ marginBottom: "-50px", paddingLeft: "30px" }}
        />
        <h3 className="loginLogo">Thank you!</h3>
        <span className="loginDesc">
          Now you can Watch your favorite movie just on Movie App.
        </span>
        <button className="buttonLogin" onClick={() => confirmButton()}>
          Activate your account & Login
        </button>
      </div>
    );
  } else {
    return (
      <div className="confirmEmail">
        <img
          src="https://img.icons8.com/dusk/128/000000/email.png"
          alt=""
          style={{ marginBottom: "-50px" }}
        />
        <h3 className="loginLogo">Email sent</h3>
        <span className="loginDesc">
          Please check your email to activate account!
        </span>
      </div>
    );
  }
}
