import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/context';
import MyButton from '../button/MyButton';

function Navbar() {
  const { setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <div className="navbar">
      <div className="navbar__links">
        <NavLink to="/About"> О сайте </NavLink>
        <NavLink to="/posts"> Посты</NavLink>
      </div>
      <MyButton onClick={logout}>выйти</MyButton>
    </div>
  );
}

export default Navbar;
