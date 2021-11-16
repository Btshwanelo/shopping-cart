import React from "react";
import { connect } from "react-redux";
import { ImBin } from "react-icons/im";
import { FiPlus, FiMinus } from "react-icons/fi";
import "./css/CardCart.css";
import { increment, decrement, removeFromCart } from "../../State/actions";

const CartCard = ({ item, removeFromCart, increment, decrement }) => {
  return (
    <div className="cart__item" key={item.id}>
      <div className="cart__item__img">
        <img src="https://via.placeholder.com/150" />
      </div>
      <div className="cart__item__title">{item.title}</div>
      <div className="cart__item__delete">
        <button onClick={() => removeFromCart(item.id)}>
          <ImBin />
        </button>
      </div>
      <div className="cart__item__quantity">
        <button
          onClick={() => {
            item.quantity > 1 && decrement(item);
          }}
        >
          <FiMinus />
        </button>
        <input value={item.quantity} />
        <button onClick={() => increment(item)}>
          <FiPlus />
        </button>
      </div>
      <div className="cart__item__price">R{item.price}</div>
      <div className="cart__item__total">R{item.total}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = () => {
  return {
    removeFromCart,
    increment,
    decrement,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(CartCard);
