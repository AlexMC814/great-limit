import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

import Logo from '../../../assets/images/shared/Logo/Logo';
import Facebook from '../../../assets/images/shared/Facebook/Facebook';
import Youtube from '../../../assets/images/shared/Youtube/Youtube';
import Button from '../Button/Button';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='grid'>
          <div className='col-4'>
            <div className='footer__menu'>
              <strong className='footer__title'>Меню</strong>
              <ul className='footer__menu-list'>
                <li className='footer__menu-item'>
                  <Link className='footer__menu-link' to='/'>
                    Главная
                  </Link>
                </li>
                <li className='footer__menu-item'>
                  <Link className='footer__menu-link' to='/events'>
                    События
                  </Link>
                </li>
                <li className='footer__menu-item'>
                  <Link className='footer__menu-link' to='/articles'>
                    Статьи
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-4'>
            <div className='contact-us'>
              <strong className='footer__title'>Связаться с нами</strong>
              <p>
                Подпишитесь на нашу рассылку и получайте важные новости и
                предложения
              </p>
              <form>
                <input type='email' placeholder='Ваш email' />
                <Button classes='white' text='Подписаться' />
              </form>
            </div>
          </div>
          <div className='col-4 text-right'>
            <span className='footer__logo'>
              <Logo width='100px' height='100px' fill='#fff' />
            </span>
            <div className='footer__social'>
              <a className='footer__social-link' href='https://facebook.com'>
                <Facebook width='40px' height='40px' fill='#fff' />
              </a>
              <a className='footer__social-link' href='https://youtube.com'>
                <Youtube width='40px' height='40px' fill='#fff' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
