import React from 'react';
import './ButtonConvert.css';

const ButtonConvert = (props) => {
  return (
    <button onClick={props.handleConvert} className='btn-convert'>
      Convert
    </button>
  );
};

export default ButtonConvert;
