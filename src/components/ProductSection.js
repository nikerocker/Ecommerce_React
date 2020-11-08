import React from "react";
import Product from "./Product";
import Filter from "./Filter";
import "./ProductSection.css";
import Breadcrum from "./Breadcrum";
export default function ProductSection(props) {
  return (
    <>
      <section className="product-container">
        <div className="container-fluid mb-4">
          <Breadcrum />
          <div className="heading">
            <span>All Products</span>
            <span className="some-blur">(25 Products)</span>
          </div>
          <Filter
            handleBtnClick={props.handleBtnClick}
            btnsData={props.btnsData}
          />
          <Product
            productsData={props.productsData}
            handleCartProducts={props.handleCartProducts}
          />
        </div>
      </section>
    </>
  );
}
