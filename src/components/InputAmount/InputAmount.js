import './InputAmount.css';

const InputAmount = ({ handleAmountChange, ...otherProps }) => {
  return (
    <div className='input-wrapper'>
      <input
        type='number'
        onChange={handleAmountChange}
        {...otherProps}
        required
      />
      <label htmlFor='amount' className='label-name'>
        <span className='content-name'>amount</span>
      </label>
    </div>
  );
};

export default InputAmount;
