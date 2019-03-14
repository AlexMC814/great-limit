import React from 'react';
import './PromoTestimonial.scss';
import Button from '../../../../UI/Button/Button';

const PromoTestimonial = () => {
  return (
    <div className='promo-testimonial'>
      <div className='testimonial'>
        <div className='top'>
          <span className='top__icon' />
          <strong className='top__title'>Промо статья</strong>
        </div>
        <div className='body'>
          <p className='body__paragraph'>Сокращенный текст статьи....</p>
        </div>
      </div>
      <div className='bottom'>
        <Button classes='outline-black' text='Читать' />
      </div>
    </div>
  );
};

export default PromoTestimonial;
