import React from 'react';
import './ButtonConvert.css';

const ButtonConvert = (props) => {
  return (
    <button
      onClick={props.handleConvert}
      className='btn-convert'
      aria-label='Convert'
    >
      Convert
    </button>
  );
};

export default ButtonConvert;
