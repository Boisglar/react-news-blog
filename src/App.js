import React from 'react';
import '../src/style/App.css';
import AppRouter from './component/AppRouter';
import Navbar from './component/UI/navbar/Navbar';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}
