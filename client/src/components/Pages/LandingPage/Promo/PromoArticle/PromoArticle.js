import React from 'react';
import './PromoArticle.scss';

import Button from '../../../../UI/Button/Button';

const PromoArticle = () => {
  return (
    <div className='promo-article'>
      <div className='article'>
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

export default PromoArticle;
