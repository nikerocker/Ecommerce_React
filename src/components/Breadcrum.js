import React from "react";
import { Link } from "react-router-dom";
export default function Breadcrum() {
  return (
    <>
      <nav className="breadcrum">
        <ol>
          <li className="breadcrumb-item">
            <Link href="#">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="#">Clothing</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="#">Mens Clothing</Link>
          </li>
          <li className="breadcrumb-item ">
            <Link className="active" href="#">
              All Mens Clothing
            </Link>
          </li>
        </ol>
      </nav>
    </>
  );
}
