import React from 'react';

import './Programms.scss';

import YinYan from '../../../../assets/images/shared/YinYan/YinYan';

const Programms = () => {
  return (
    <div className='container'>
      <div className='programms'>
        <div className='programms__bg'>
          <YinYan
            width='600px'
            height='600px'
            fill='rgba(255, 255, 255, 0.1)'
          />
        </div>
        <h3 className='text-center'>Программы обучения</h3>
        <div className='grid'>
          <div className='col-4'>
            <div className='programm'>
              <div className='programm__title text-center'>
                <strong>Тайцзи Цуань</strong>
              </div>
              <div className='programm__img taichi' />
              <div className='programm__description'>
                <p className='text-center'>
                  Тайцзи Цуань семьи Ян по линии мастеров Хуан Шень Шьяна и Ян
                  Шао Ху, в передаче Адама Мицнера.
                </p>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='programm'>
              <div className='programm__title text-center'>
                <strong className='text-center'>И Цуань</strong>
              </div>
              <div className='programm__img yiquan' />
              <div className='programm__description'>
                <p className='text-center'>
                  И Цуань в передаче Вадима Игнатова, по линии Яо Дзюн Сюня и
                  Джан Чан Вана.
                </p>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='programm'>
              <div className='programm__title text-center'>
                <strong className='text-center'>Даосская медитация</strong>
              </div>
              <div className='programm__img tao' />
              <div className='programm__description'>
                <p className='text-center'>
                  Традиционные методы даосской медитации.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programms;
