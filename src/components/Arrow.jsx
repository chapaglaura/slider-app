import React from "react";
import "./Arrow.css";

const Arrow = props => {
  if (props.direction === "left") {
    return (
      <div className="arrow left-arrow">
        <span onClick={props.prev}>
          <i className="fas fa-angle-left" />
        </span>
      </div>
    );
  } else if (props.direction === "right") {
    return (
      <div onClick={props.next} className="arrow right-arrow">
        <span>
          <i className="fas fa-angle-right" />
        </span>
      </div>
    );
  }
};

export default Arrow;
