import React from 'react';
import './CarouselItem.scss';

const CarouselItem = ({ active, index, children }) => {
  return (
    <div
      className={
        index === active
          ? 'carousel__item carousel__item--active'
          : 'carousel__item'
      }>
      {children}
    </div>
  );
};

export default CarouselItem;
