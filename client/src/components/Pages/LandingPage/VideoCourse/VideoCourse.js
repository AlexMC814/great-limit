import React from 'react';
import './VideoCourse.scss';

import Button from '../../../UI/Button/Button';

const VideoCourse = () => {
  return (
    <div className='video-course'>
      <div className='video-course__bg'>
        <div className='container'>
          <div className='video-course__inner'>
            <p className='video-course__p'>Онлайн курс Тайцзи Цуань</p>
            <Button classes='outline-white' text='Подписаться' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCourse;
