import React from "react";
import { Link } from "react-router-dom";
export default function Breadcrum() {
  return (
    <>
      <nav className="breadcrum">
        <ol>
          <li className="breadcrumb-item">
            <Link to="/Home">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/Clothing">Clothing</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/Mens Clothing">Mens Clothing</Link>
          </li>
          <li className="breadcrumb-item ">
            <Link className="active" to="/All Mens Clothing">
              All Mens Clothing
            </Link>
          </li>
        </ol>
      </nav>
    </>
  );
}
