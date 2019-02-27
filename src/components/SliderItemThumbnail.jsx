import React from "react";
import "./SliderItemThumbnail.css";

const SliderItemThumbnail = props => {
  const sliderItems = props.items;
  return sliderItems.map((el, i) => {
    return (
      <div
        className="thumbnail"
        onClick={event => {
          props.click(event);
        }}
        style={{ backgroundImage: `url(${el})` }}
        key={i}
        data-index={i}
        alt=""
      />
    );
  });
};

export default SliderItemThumbnail;
