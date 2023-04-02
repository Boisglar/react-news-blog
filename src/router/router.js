import About from '../component/About';
import PostById from '../component/PostById';
import Posts from '../pages/Posts';

export const routes = [
  { path: '/about', component: <About /> },
  { path: '/posts', component: <Posts /> },
  { path: '/posts/:id', component: <PostById /> },
];
