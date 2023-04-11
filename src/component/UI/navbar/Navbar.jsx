import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/context';
import MyButton from '../button/MyButton';
import s from './Navbar.module.css';

function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <div className={s.navbar}>
      <div className={s.navbar__links}>
        <NavLink to="/About"> О сайте </NavLink>
        <NavLink to="/posts"> Посты</NavLink>
      </div>
      {isAuth && <MyButton onClick={logout}>выйти</MyButton>}
    </div>
  );
}

export default Navbar;
