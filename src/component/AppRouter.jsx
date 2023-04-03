import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context/context';
import { pablicRoutes, privateRoutes } from '../router/router';

function AppRouter() {
  const { isAuth } = useContext(AuthContext);
  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route) => {
            return <Route path={route.path} element={route.component} key={route.path} />;
          })
        : pablicRoutes.map((route) => {
            return <Route path={route.path} element={route.component} key={route.path} />;
          })}
    </Routes>
  );
}

export default AppRouter;
