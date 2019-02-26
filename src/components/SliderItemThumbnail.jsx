import React, { Component } from 'react';
import './SliderItemThumbnail.css';

class SliderItemThumbnail extends Component  {
	constructor(props) {
  	super(props);
  }
  
  
  render() {
  	const sliderItems = this.props.items;
  	return (
    	sliderItems.map((el, i) => {
        return <img className='thumbnail' onClick={(event) => {this.props.click(event)}} src={el} key={i} data-index={i} alt="" />
    	})
    );
  }
}

export default SliderItemThumbnail;