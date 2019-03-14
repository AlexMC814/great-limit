import React from 'react';
import { NavLink } from 'react-router-dom';

import SignOut from '../../SignOut/SignOut';
import Profile from '../../../../assets/images/shared/Profile/Profile';

const AuthBarAuth = ({ session, scrolled }) => (
  <div className={!scrolled ? 'authbar' : 'authbar scrolled auth'}>
    <div className='authbar__wrapper'>
      <ul className='authbar__nav'>
        {/* <li className='authbar__nav-item'>
        <span className='authbar__greeting'>
          Привет <strong>{session.getCurrentUser.userName}.</strong>
        </span>
      </li> */}
        <li className='authbar__nav-item'>
          <span className='authbar__profile-icon'>
            <Profile width='40' height='40' fill='rgba(0, 0, 0, 0.5)' />
            <ul className='authbar__profile-sub'>
              <li className='authbar__profile-item'>
                <NavLink className='authbar__profile-link' to='/profile'>
                  Профиль
                </NavLink>
              </li>
              <li className='authbar__profile-item'>
                <span className='authbar__profile-link'>
                  <SignOut scrolled={scrolled} />
                </span>
              </li>
            </ul>
          </span>
        </li>
      </ul>
    </div>
  </div>
);

export default AuthBarAuth;
