import React from "react";
import "./Dropdown.css";
export default function Dropdown() {
  return (
    <div class="dropdown col-3 text-right">
      <div className="selector">
        <label for="price">Sort By: </label>
        <select name="price" id="price">
          <option value="htl">Price High To Low</option>
          <option value="lth">Price Low to High</option>
        </select>
      </div>
    </div>
  );
}
