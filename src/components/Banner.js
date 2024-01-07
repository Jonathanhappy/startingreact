// @flow
import * as React from 'react';
import logo from '../assets/logo.png';
import '../styles/Banner.css';
export function Banner() {
  const title = 'Starting Mag'
  return (
    <div className='headerbannier'>
      <img src={logo} alt='startingmag' className='img-logo' />
      <h1 className='headertitle'>{title}</h1>
    </div>
  );
};