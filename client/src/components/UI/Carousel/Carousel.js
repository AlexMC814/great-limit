import React, { Component } from 'react';

import './Carousel.scss';

import CarouselItem from './CarouselItem/CarouselItem';
import CarouselIndicators from './CarouselIndicators/CarouselIndicators';

export default class Carousel extends Component {
  state = {
    active: 0,
  };

  componentDidMount() {
    if (this.props.auto) {
      this.slideTimer = setInterval(() => this.autoSlide(), 5000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.slideTimer);
  }

  autoSlide = () => {
    let index = this.state.active;
    let { children } = this.props;
    let slidesLength = children.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    this.setState({ active: ++index });
  };

  goToSlide = index => {
    this.setState({ active: index });
  };

  goToPrevSlide(event) {
    event.preventDefault();

    let index = this.state.active;
    let { children } = this.props;
    let slidesLength = children.length;

    if (index < 1) {
      index = slidesLength;
    }

    this.setState({ index: --index });
  }

  gotToNextSlide(event) {
    event.preventDefault();

    let index = this.state.active;
    let { children } = this.props;
    let slidesLength = children.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    this.setState({ active: ++index });
  }

  render() {
    const { children } = this.props;
    return (
      <div className='carousel'>
        <div className='carousel__wrapper'>
          {children.map((child, index) => {
            return (
              <CarouselItem
                key={index}
                active={this.state.active}
                index={index}>
                {child}
              </CarouselItem>
            );
          })}
        </div>
        <CarouselIndicators
          slides={children}
          active={this.state.active}
          click={index => this.goToSlide(index)}
        />
      </div>
    );
  }
}
