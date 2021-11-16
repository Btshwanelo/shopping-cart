import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./css/Login.css";
import { Button } from "../../components";
import Swal from "sweetalert2";
import { loginUser, cleanErrorMessage } from "../../State/actions";
import Header from "../../components/Header/Header";

const Login = ({ loginUser, users, cleanErrorMessage }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  if (users.session.name) {
    return <Redirect to="/" />;
  }

  const handleLogin = (form) => {
    if (form.email === "" || form.password === "") {
      Swal.fire({
        text: "One or more field is empty",
        icon: "error",
        width: "300px",
      });
      return;
    } else if (users.message !== "") {
      Swal.fire({
        text: `${users.message}`,
        icon: "error",
        width: "300px",
      });

      cleanErrorMessage();
      return;
    }
    loginUser(form);
  };

  return (
    <div className="login">
      <Header />
      <div className="login__card">
        <h1>
          <b>Sign In</b>
        </h1>
        <input
          type="text"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email Address"
        />
        <input
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Password"
        />
        <Button onClick={() => handleLogin(form)}>Sign In</Button>
      </div>
      <p>
        Dont have an account ? <Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
};
const mapStateToProps = ({ users, cart }) => {
  return {
    cart,
    users,
  };
};

const mapDispatchToProps = () => {
  return {
    loginUser,
    cleanErrorMessage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Login);
