import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { registerUser, cleanErrorMessage } from "../../State/actions";
import "./css/Register.css";
import Swal from "sweetalert2";
import { Button } from "../../components";
import Header from "../../components/Header/Header";
import FormCard from "../../components/LoginCard/FormCard";
const Register = ({ registerUser, users, cleanErrorMessage }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegisterUser = (form) => {
    if (form.name === "" || form.email === "" || form.password === "") {
      Swal.fire({
        text: "All fields have to correctly filled",
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
    } else registerUser(form);
    Swal.fire({
      text: "User registered",
      icon: "success",
      width: "300px",
    });
    setForm({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="register">
      <Header />
      <FormCard heading={"Sign Up"}>
        
      <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="First Name"
        />
        <input
          type="email"
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
        <Button onClick={() => handleRegisterUser(form)}>Sign In</Button>
      </FormCard>
      <p>
        Already have an account ? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    users: state.users,
  };
};

const mapDispatchToProps = () => {
  return {
    registerUser,
    cleanErrorMessage,

  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Register);
