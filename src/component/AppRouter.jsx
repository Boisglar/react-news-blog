import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../router/router';

function AppRouter() {
  return (
    <Routes>
      {routes.map((route) => {
        return <Route path={route.path} element={route.component} key={route.path} />;
      })}
    </Routes>
  );
}

export default AppRouter;
