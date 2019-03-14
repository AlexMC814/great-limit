import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthBarUnAuth = ({ scrolled }) => (
  <div className={!scrolled ? 'authbar' : 'authbar scrolled not-auth'}>
    <div className='authbar__wrapper'>
      <ul className='authbar__nav'>
        <li className='authbar__nav-item'>
          <NavLink className='authbar__nav-link' to='/signin'>
            Вход
          </NavLink>
        </li>
        |&nbsp;&nbsp;
        <li className='authbar__nav-item'>
          <NavLink className='authbar__nav-link' to='/signup' exact>
            Регистрация
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default AuthBarUnAuth;
