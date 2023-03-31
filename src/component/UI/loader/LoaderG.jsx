import React from 'react';
import s from './Loader.module.css';

function LoaderGPT() {
  return (
    <div className={s.loader}>
      <div className={`${s.inner} ${s.one}`}></div>
      <div className={`${s.inner} ${s.two}`}></div>
      <div className={`${s.inner} ${s.three}`}></div>
    </div>
  );
}

export default LoaderGPT;
