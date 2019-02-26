import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import SignOut from '../SignOut/SignOut';

const Navbar = ({ session }) => {
    return (
        <nav>
            {session && session.getCurrentUser ? <NavbarAuth session={session} /> : <NavbarUnAuth />}
        </nav>
    )
}

const NavbarUnAuth = () => (
    <ul>
        <li>
            <NavLink to="/" exact>Главная</NavLink>
        </li>
        <li>
            <NavLink to="/search">Поиск</NavLink>
        </li>
        <li>
            <NavLink to="/signin">Вход</NavLink>
        </li>
        <li>
            <NavLink to="/signup" exact>Регистрация</NavLink>
        </li>
    </ul>
);
const NavbarAuth = ({ session }) => (
    <Fragment>
        <ul>
            <li>
                <NavLink to="/" exact>Главная</NavLink>
            </li>
            <li>
                <NavLink to="/search">Поиск</NavLink>
            </li>
            <li>
                <NavLink to="/video/add">Добавить видео</NavLink>
            </li>
            <li>
                <NavLink to="/profile">Профиль</NavLink>
            </li>
            <li>
                <SignOut />
            </li>
        </ul>
        <h4>Привет, <strong>{session.getCurrentUser.userName}</strong></h4>
    </Fragment>
);

export default Navbar
