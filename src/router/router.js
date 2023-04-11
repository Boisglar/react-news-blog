import { Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import PostById from '../component/PostById';
import Posts from '../pages/Posts';
import NotFount from '../pages/NotFount';
import About from '../component/About/About';

export const privateRoutes = [
  { path: '/about', component: <About /> },
  { path: '/posts', component: <Posts /> },
  { path: '/posts/:id', component: <PostById /> },
  { path: '/', component: <Navigate to="/posts" /> },
  { path: '*', component: <NotFount /> },
];

export const pablicRoutes = [
  { path: '/login', component: <Login /> },
  { path: '/', component: <Navigate to="/login" /> },
  { path: '*', component: <Login /> },
];
