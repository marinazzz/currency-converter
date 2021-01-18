import React from 'react';
import './CurrencyOptions.css';
import './arrow-icon.png';

const CurrencyOptions = (props) => {
  const {
    selectedCurrency,
    onChangeCurrency,
    currencyOptions,
    labelName,
  } = props;
  return (
    <div className='select-wrapper'>
      <label className='select-label' htmlFor={labelName}>
        {labelName}
      </label>
      <select
        className='select-currency'
        value={selectedCurrency}
        onChange={onChangeCurrency}
      >
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyOptions;
