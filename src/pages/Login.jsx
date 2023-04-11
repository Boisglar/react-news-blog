import React, { useContext } from 'react';
import { AuthContext } from '../context/context';
import MyButton from '../component/UI/button/MyButton';
import MyInput from '../component/UI/input/MyInput';

function Login() {
  const { setIsAuth } = useContext(AuthContext);
  const hendelAuth = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };
  return (
    <div className="login-form">
      <h1>Вход</h1>
      <form onSubmit={hendelAuth}>
        <MyInput type="text" placeholder="login" />
        <MyInput type="password" placeholder="password" />
        <MyButton> Войти </MyButton>
      </form>
    </div>
  );
}

export default Login;
