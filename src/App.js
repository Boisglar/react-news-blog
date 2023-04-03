import React, { useEffect, useState } from 'react';
import '../src/style/App.css';
import AppRouter from './component/AppRouter';
import Navbar from './component/UI/navbar/Navbar';
import { AuthContext } from './context/context';

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}>
      <div className="App">
        <Navbar />
        <AppRouter />
      </div>
    </AuthContext.Provider>
  );
}
