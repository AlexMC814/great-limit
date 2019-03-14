import React from 'react';

import './About.scss';

import BgFigure1 from '../../../../assets/images/shared/bgFigure1/bgFigure1';

const About = () => {
  return (
    <div className='about-section'>
      <div className='container'>
        <h2 className='text-center'>Великий Предел</h2>
        <div className='grid'>
          <div className='col-7'>
            <div className='about__bg'>
              <BgFigure1
                width='500'
                height='500'
                fill='rgba(255, 255 ,255, .1)'
              />
            </div>
            <p>
              Великий предел - так переводится с китайского языка иероглиф
              Тайцзи. Этот же иероглиф украшает собой название знаменитого стиля
              китайского ушу - Тайцзи цуань (кулак Великого предела). Когда Инь
              и Ян в гармонии, мы обретаем способность жить в гармонии с собой и
              окружающим нас миром.
            </p>
            <p>
              Проект Великий Предел посвящен обучению комплексу внутренних
              практик, таких как Тайцзи цуань, И Цуань и Медитативные даосские
              практики. Цель проекта - популяризация аутентичных внутренних
              практик для укрепления здоровья, изучения боевых искусств и
              духовного развития
            </p>
          </div>
          <div className='col-5'>
            <div className='about__img' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
