import React, { useState } from "react";
import "./Dropdown.css";
export default function Dropdown(props) {
  return (
    <div className="dropdown col-9 col-md-3 text-right">
      <div className="selector">
        <label htmlFor="price">Sort By: </label>
        <select onChange={(e) => props.sortHTL(e)} name="price" id="price">
          <option value="lth">Price High To Low</option>
          <option value="htl">Price Low to High</option>
        </select>
      </div>
    </div>
  );
}
