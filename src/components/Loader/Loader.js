import React from 'react'
import './Loader.css';

const Loader = ({ className }) => {
  return (
    <div className={`lds-roller ${className || ''}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Loader;
