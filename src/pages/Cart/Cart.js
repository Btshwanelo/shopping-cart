import React from "react";
import "./css/Cart.css";

import {
  removeFromCart,
  increment,
  decrement,
  checkout,
} from "../../State/actions";

import Swal from "sweetalert2";
import { connect } from "react-redux";
import Header from "../../components/Header/Header";
import { Button } from "../../components/index";
import CartCard from "../../components/CartCard/CartCard";
import CartContainer from "./CartContainer";

const Cart = ({ cart, users, checkout }) => {
  let total = 0;
  for (let i = 0; i < cart.items.length; i++) {
    total += cart.items[i].total;
  }

  const successCheckout = () => {
    Swal.fire({
      text: "Your order hasbeen processed",
      icon: "success",
    });
    checkout();

    // or Swal.fire( 'Good job!','You clicked the button','success');
  };

  const failCheckout = () => {
    Swal.fire({
      text: "You need to log in before you can checkout",
      icon: "error",
    });
    // or Swal.fire( 'Good job!','You clicked the button','success');
  };

  return (
    <div className="cart">
      <Header />
      <div className="cart__header">
        <h3>
          <b>Shopping Cart</b>
        </h3>
      </div>
      <div className="cart__item">
        <div className="cart__item__img">Image |</div>
        <div className="cart__item__title">Title |</div>
        <div className="cart__item__delete">Delete |</div>
        <div className="cart__item__delete">Quantity |</div>
        <div className="cart__item__price">Price |</div>
        <div className="cart__item__total">Total</div>
      </div>
      <CartContainer />
      <div className="cart__checkout">
        <p>No of Items: {cart.items.length}</p>
        <p>Total Cost: R{total}</p>
      </div>
      <button
        className={
          cart.items.length >= 1
            ? "cart__checkout__button"
            : "cart__checkout__button__disable"
        }
        onClick={users.session.name ? successCheckout : failCheckout}
      >
        CheckOut
      </button>
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
    removeFromCart,
    increment,
    decrement,
    checkout,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Cart);
