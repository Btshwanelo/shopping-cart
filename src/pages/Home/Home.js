import React from "react";
import { connect } from "react-redux";
import "./css/Home.css";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import HomeContainer from "./HomeContainer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__products">
        <div className="home__products__heading">
          <h1>Products</h1>
        </div>
        <HomeContainer />
      </div>
      <div className="home__footer">
        <p>Fake Store Footer</p>
      </div>
    </div>
  );
};

export default Home;
