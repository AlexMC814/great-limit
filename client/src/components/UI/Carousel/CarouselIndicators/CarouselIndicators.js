import React from 'react';
import './CarouselIndicators.scss';

const CarouselIndicators = ({ slides, active, click }) => {
  return (
    <ul className='carousel__indicators'>
      {slides.map((slide, index) => (
        <li key={index}>
          <span
            className={
              index === active
                ? 'carousel__indicator carousel__indicator--active'
                : 'carousel__indicator'
            }
            onClick={() => click(index)}
          />
        </li>
      ))}
    </ul>
  );
};

export default CarouselIndicators;
