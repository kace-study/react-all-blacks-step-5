import React from 'react';
import './Panel.css';

const Panel = ({ isBlack, handleClick }) => {
  return (
    <button 
      className={`panel ${ isBlack ? 'bg-black' : 'bg-white' }`} 
      onClick={handleClick}
    />
  );
}

export default Panel;