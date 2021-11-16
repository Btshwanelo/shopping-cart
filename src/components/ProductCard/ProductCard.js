import React from "react";
import Swal from "sweetalert2";
import { addToCart } from "../../State/actions";
import { connect } from "react-redux";
import "./css/ProductCard.css";

const ProductCard = ({ item, addToCart, cart }) => {
  const handleAddToCart = (item) => {
    if (cart.items.find((x) => x.id === item.id)) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        width: "200px",
        title: "Already added to cart",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Added to cart",
      width: "200px",
      showConfirmButton: false,
      timer: 1500,
    });
    addToCart(item);
  };

  return (
    <div className="home__products__items__card" key={item.id}>
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "100%", height: "100px" }}
      />
      <p>{item.title}</p>
      <p class="price">R{item.price}</p>
      <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart,
  };
};

const mapDispatchToProps = () => {
  return {
    addToCart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ProductCard);
