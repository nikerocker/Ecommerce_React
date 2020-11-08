import React from "react";
import "./Filter.css";
import Dropdown from "./Dropdown";
export default function Filter(props) {
  const btnsData = [
    { value: "T-shirt", name: "Tee Shirt" },
    { value: "Denim", name: "Denim" },
    { value: "Sweatshirt", name: "Sweatshirts" },
    { value: "Polo", name: "Polo Tee Shirt" },
    { value: "Shirt", name: "Shirt" },
  ];
  return (
    <>
      <div className="row d-flex align-items-baseline">
        <div className="col-9 filter-options">
          <h3>FILTERS:</h3>
          <div className="buttons-container">
            {btnsData.map((btn, index) => {
              return (
                <button
                  key={index}
                  value={btn.value}
                  onClick={props.handleBtnClick}
                >
                  {btn.name}
                </button>
              );
            })}
          </div>
        </div>
        <Dropdown />
      </div>
      <hr className="filter-hr" />
    </>
  );
}
