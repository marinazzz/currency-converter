import './CurrencyOptions.css';
import './arrow-icon.png';

const CurrencyOptions = ({
  selectedCurrency,
  onChangeCurrency,
  currencyOptions,
  labelName,
}) => {
  return (
    <div className='select-wrapper'>
      <label className='select-label' htmlFor={labelName}>
        {labelName}
      </label>
      <select
        className='select-currency'
        value={selectedCurrency}
        onChange={onChangeCurrency}
        id={labelName}
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
