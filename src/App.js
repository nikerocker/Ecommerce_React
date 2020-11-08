import React, { Component } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import "./App.css";
import ProductSection from "./components/ProductSection";
import Offer from "./components/Offer";

import Header from "./components/Header";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsData: [],
      filteredData: [],
      cartCount: 0,
    };
    this.handleCartProducts = this.handleCartProducts.bind(this);
  }

  componentDidMount() {
    this.getProductData();
  }

  handleCartProducts() {
    this.setState({
      cartCount: this.state.cartCount + 1,
    });
  }

  getProductData() {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        this.apiProducts = data;
        this.setState({ productsData: data });
      })
      .catch((err) => console.error(err));
  }

  handleBtnClick = (e) => {
    e.target.style.borderColor = "black";
    let filteredData;
    if (e.target.value === "All") {
      filteredData = this.apiProducts;
    } else {
      filteredData = this.apiProducts.filter(
        (item) =>
          item.tag.includes(e.target.value) ||
          item.name.includes(e.target.value)
      );
    }
    this.setState({
      productsData: filteredData,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header cartCount={this.state.cartCount} />
          <Offer />
          <ProductSection
            productsData={this.state.productsData}
            handleBtnClick={this.handleBtnClick}
            handleCartProducts={this.handleCartProducts}
          />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
