import React from "react";
export default function VariantSelector(props) {
  var variant = props.variant;
  // console.log(variant)

  const handleClick = (e) => {
    e.target.parentElement.previousSibling.previousSibling.style.display =
      "block";
  };
  return (
    <>
      <div className="variant-selector">
        <div id="add__to__cart" className="add-to-cart">
          <button className="" onClick={(e) => props.handleCartProducts(e)}>
            Add to Cart
          </button>
        </div>
        <h5>Select Size</h5>
        <div className="size-in-number">
          {variant.map((value, i) => {
            return (
              <span data-index onClick={(e) => handleClick(e)} key={i}>
                {value.value}
              </span>
            );
          })}
        </div>
        <h4>Sizes: XS, S, M, L, XL, XLL</h4>
      </div>
    </>
  );
}

//set a count in span, than pass the same count into the handleclick function, then into div then it will display;
