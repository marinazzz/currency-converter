import React from 'react';
import arrow from './switch-vertical.svg';
import './SwitchCurrencies.css';

const SwitchCurrencies = (props) => {
  return (
    <img
      className='switch-icon'
      alt='switch-arrow to change currency'
      src={arrow}
      onClick={props.handleSwitchCurrencies}
    ></img>
  );
};

export default SwitchCurrencies;
