import React from "react";
import Product from "../components/Product";
import Filter from "./FilterBar";
import "./ProductSection.css";
import Breadcrum from "../components/Breadcrum";
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
            sortHTL={props.sortHTL}
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
