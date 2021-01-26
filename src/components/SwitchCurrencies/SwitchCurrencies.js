import arrow from './switch-vertical.svg';
import './SwitchCurrencies.css';

const SwitchCurrencies = ({ handleSwitchCurrencies }) => {
  return (
    <img
      className='switch-icon'
      alt='switch-arrow to change currency'
      src={arrow}
      onClick={handleSwitchCurrencies}
    ></img>
  );
};

export default SwitchCurrencies;
