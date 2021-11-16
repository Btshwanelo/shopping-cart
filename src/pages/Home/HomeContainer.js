import React from "react";
import { connect } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";

const HomeContainer = ({ products }) => {
  return (
    <div className="home__products__items">
      {products.map((item) => (
        <ProductCard item={item} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(HomeContainer);
