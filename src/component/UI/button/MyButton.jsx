import React from 'react';
import s from './MyButton.module.css';

export default function MyButton({ children, ...props }) {
  return (
    <button {...props} className={s.myBtn}>
      {children}
    </button>
  );
}
