import React from 'react';

const CurrencyOptions = (props) => {
  const { selectedCurrency, onChangeCurrency, currencyOptions } = props;
  return (
    <select value={selectedCurrency} onChange={onChangeCurrency}>
      {currencyOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default CurrencyOptions;
