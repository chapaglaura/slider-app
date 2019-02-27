import React, { Component } from 'react';
import SliderItem from './SliderItem';
import SliderItemThumbnail from './SliderItemThumbnail';


class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0
        }
    }

    clickedThumbnail = (event) => {
        const index = event.target.getAttribute('data-index');
        console.log('New index', index);
        this.setState({
            slideIndex: index
        })
    }

    prevSlide = () => {
        const currentSlide = parseInt(this.state.slideIndex);
        const lastSlide = this.props.sliderItems.length - 1;
        if (currentSlide === 0) {
            const newSlide = lastSlide;
            this.setState({
                slideIndex: newSlide
            })
        }
        else {
            const newSlide = currentSlide - 1;
            this.setState({
                slideIndex: newSlide
            })
        }
    }

    nextSlide = () => {
        const currentSlide = parseInt(this.state.slideIndex);
        const lastSlide = this.props.sliderItems.length - 1;
        if (currentSlide === lastSlide) {
            const newSlide = 0;
            this.setState({
                slideIndex: newSlide
            })
        }
        else {
            const newSlide = currentSlide + 1;
            this.setState({
                slideIndex: newSlide
            })
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <SliderItem items={this.props.sliderItems} itemIndex={this.state.slideIndex} nextItem={this.nextSlide} prevItem={this.prevSlide} />
                <div className="row thumbnail-row">
                    <div className="col-12">
                        <SliderItemThumbnail items={this.props.sliderItems} click={this.clickedThumbnail} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;