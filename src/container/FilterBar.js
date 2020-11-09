import React, { useState } from "react";
import "./FilterBar.css";
import Dropdown from "../components/Dropdown";
import Filter from "../components/Filter";
import Data from "../data/filterData";
export default function FilterBar(props) {
  return (
    <>
      <div className="row d-flex align-items-baseline">
        <Filter handleBtnClick={props.handleBtnClick} btnsData={Data} />
        <Dropdown sortHTL={props.sortHTL} />
      </div>
      <hr className="filter-hr" />
    </>
  );
}
