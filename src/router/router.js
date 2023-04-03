import { Navigate, redirect } from 'react-router-dom';
import About from '../component/About';
import Login from '../pages/Login';
import PostById from '../component/PostById';
import Posts from '../pages/Posts';

export const privateRoutes = [
  { path: '/about', component: <About /> },
  { path: '/posts', component: <Posts /> },
  { path: '/posts/:id', component: <PostById /> },
  { path: '/', component: <Navigate to="/posts" /> },
];

export const pablicRoutes = [
  { path: '/login', component: <Login /> },
  { path: '/', component: <Navigate to="/login" /> },
  { path: '*', component: <Login /> },
];
