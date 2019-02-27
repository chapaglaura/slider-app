import React from "react";
import Arrow from "./Arrow";
import "./SliderItem.css";

const SliderItem = props => {
  const { itemIndex } = props;
  const itemUrl = props.items[itemIndex];
  return (
    <div className="mainSlider">
      <Arrow direction={"left"} prev={props.prevItem} />
      <img
        className="mainImage img-fluid"
        src={itemUrl}
        alt=""
        data-index={itemIndex}
      />
      <Arrow direction={"right"} next={props.nextItem} />
    </div>
  );
};

export default SliderItem;
