import React from "react";
import { BiCart } from "react-icons/bi";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../State/actions";
import "./css/Header.css";

const Header = ({ cart, users, logOut }) => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <Link to="/">Logo</Link>
      </div>
      <di className="nav__avatar">
        <Link to="/cart">
          <BiCart />
          <span>({cart.items.length})</span>
        </Link>
      </di>
      <div className="nav__login">
        {users.session.name ? (
          <button onClick={() => logOut()}>Log Out</button>
        ) : (
          <Link to="/login">{users.session.name ? "Log Out" : "Log In"}</Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    users: state.users,
    cart: state.cart,
  };
};

const mapDispatchToProps = () => {
  return {
    logOut,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Header);
