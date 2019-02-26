import React, { Component } from 'react';
import Arrow from './Arrow';
import './SliderItem.css';

class SliderItem extends Component {
	constructor(props) {
  	super(props);
  }
  
  render() {
  	const {itemIndex} = this.props;
  	const itemUrl = this.props.items[itemIndex];
  	return (
    	<div className='mainSlider'>
      	<Arrow direction={'left'} prev={this.props.prevItem} />
    		<img className='mainImage' src={itemUrl} alt="" data-index={itemIndex} />
        <Arrow direction={'right'} next={this.props.nextItem} />
      </div>
    );
  }
}

export default SliderItem;