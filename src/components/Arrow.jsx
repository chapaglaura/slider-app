import React, { Component } from 'react';
import './Arrow.css';

class Arrow extends Component {
	constructor(props) {
  	super(props);
  }
  
  
  render() {
  	if (this.props.direction === 'left') {
    	return (
      	<div className='arrow left-arrow'>
      	  <span onClick={this.props.prev}>&lt;</span>
      	</div>
      );
    }
    else if (this.props.direction === 'right') {
    	return (
      	<div onClick={this.props.next} className='arrow right-arrow'>
      	  <span>&gt;</span>
      	</div>
      );
    }
  }
}

export default Arrow;