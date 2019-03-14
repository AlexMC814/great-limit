import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../assets/images/shared/Logo/Logo';

import './Navbar.scss';

const NavBar = ({ session, scrolled }) => {
  return (
    <nav className={!scrolled ? 'navbar' : 'navbar scrolled'}>
      {session && session.getCurrentUser ? (
        <NavbarAuth session={session} scrolled={scrolled} />
      ) : (
        <NavbarUnAuth scrolled={scrolled} />
      )}
    </nav>
  );
};

const NavbarUnAuth = ({ scrolled }) => (
  <div className='container'>
    <div className='navbar__wrapper'>
      <div className='navbar__logo'>
        <Link to='/'>
          <Logo
            title='logo-black'
            width={!scrolled ? '120px' : '70px'}
            height={!scrolled ? '120px' : '70px'}
          />
        </Link>
      </div>
      <ul className='navbar__nav'>
        <li className='navbar__nav-item'>
          <NavLink className='navbar__nav-link' to='/' exact>
            Главная
          </NavLink>
        </li>
        <li className='navbar__nav-item'>
          <NavLink className='navbar__nav-link' to='/events'>
            События
          </NavLink>
        </li>
        <li className='navbar__nav-item'>
          <NavLink className='navbar__nav-link' to='/articles'>
            Статьи
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);
const NavbarAuth = ({ session, scrolled }) => (
  <Fragment>
    <div className='container'>
      <div className='navbar__wrapper'>
        <div className='navbar__logo'>
          <Link to='/'>
            <Logo
              title='logo-black'
              width={!scrolled ? '120px' : '70px'}
              height={!scrolled ? '120px' : '70px'}
            />
          </Link>
        </div>
        <ul className='navbar__nav'>
          <li className='navbar__nav-item'>
            <NavLink className='navbar__nav-link' to='/' exact>
              Главная
            </NavLink>
          </li>
          <li className='navbar__nav-item'>
            <NavLink className='navbar__nav-link' to='/events'>
              События
            </NavLink>
          </li>
          <li className='navbar__nav-item'>
            <NavLink className='navbar__nav-link' to='/articles'>
              Статьи
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </Fragment>
);

export default NavBar;
