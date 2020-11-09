import React from "react";

export default function Filter(props) {
  return (
    <>
      <div className="col-9 filter-options">
        <h3>FILTERS:</h3>
        <div className="buttons-container">
          {props.btnsData.map((btn, index) => {
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
    </>
  );
}
