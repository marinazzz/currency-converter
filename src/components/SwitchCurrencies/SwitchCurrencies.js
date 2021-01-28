import arrow from './switch-vertical.svg';
import './SwitchCurrencies.css';

const SwitchCurrencies = ({ handleSwitchCurrencies }) => {
  return (
    <img
      className='switch-icon'
      src={arrow}
      onClick={handleSwitchCurrencies}
      role='button'
      aria-label='switch currency'
    ></img>
  );
};

export default SwitchCurrencies;
