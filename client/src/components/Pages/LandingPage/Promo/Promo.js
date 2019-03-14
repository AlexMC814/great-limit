import React from 'react';
import './Promo.scss';

import Carousel from '../../../UI/Carousel/Carousel';

import PromoArticle from './PromoArticle/PromoArticle';
import PromoTestiomonial from './PromoTestimonial/PromoTestiomonial';

const Promo = () => {
  return (
    <div className='container'>
      <div className='promo'>
        <div className='grid'>
          <div className='col-6'>
            <div className='promo__section'>
              <div className='promo__section-title'>
                <strong>Отзывы</strong>
              </div>
            </div>
            <Carousel>
              <PromoTestiomonial />
              <PromoTestiomonial />
              <PromoTestiomonial />
            </Carousel>
          </div>
          <div className='col-6'>
            <div className='promo__section'>
              <div className='promo__section-title'>
                <strong className='promo__section-title'>
                  Последнее из блога
                </strong>
              </div>
            </div>
            <Carousel>
              <PromoArticle />
              <PromoArticle />
              <PromoArticle />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
