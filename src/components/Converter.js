import React, { Component } from 'react';
import CurrencyOptions from './CurrencyOptions';

export class Converter extends Component {
  constructor() {
    super();
    this.state = {
      originalAmount: 1,
      baseCurrency: 'NOK',
      toCurrency: 'USD',
      currencies: [],
      rates: [],
      converted: '',
      isConverted: false,
    };
  }
  componentDidMount() {
    this.fetchData(this.state.baseCurrency);
  }

  fetchData = (base) => {
    const api = `https://api.exchangeratesapi.io/latest?base=${base}`;
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          rates: data['rates'],
          currencies: [...Object.keys(data['rates']).sort()],
        });
      });
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  changeBaseCurrency = (e) => {
    this.setState({ baseCurrency: e.target.value });
    this.fetchData(e.target.value);
  };

  changetoCurrency = (e) => {
    this.setState({ toCurrency: e.target.value });
    this.fetchData(e.target.value);
  };

  handleConvert = (event) => {
    event.preventDefault();
    const { originalAmount, toCurrency, rates } = this.state;
    this.setState({
      converted: (originalAmount * rates[toCurrency]).toFixed(3),
      isConverted: true,
    });
  };

  render() {
    const {
      originalAmount,
      baseCurrency,
      toCurrency,
      currencies,
      isConverted,
      converted,
    } = this.state;

    const defaultText = 'Converted 💰 will appear here.';
    const updatedText = `${originalAmount} ${baseCurrency} is equal to ${converted} ${toCurrency}`;

    return (
      <form onSubmit={this.handleConvert}>
        <label htmlFor='amount'>Amount</label>
        <input
          type='number'
          name='originalAmount'
          value={originalAmount}
          id='originalAmount'
          onChange={this.handleChange}
        />
        <div>
          <label htmlFor='from'>from</label>
          <CurrencyOptions
            currencyOptions={currencies}
            onChangeCurrency={this.changeBaseCurrency}
            name='baseCurrency'
            id='from'
            selectedCurrency={baseCurrency}
          />
        </div>
        <div>
          <label htmlFor='to'>to</label>
          <CurrencyOptions
            currencyOptions={currencies}
            onChangeCurrency={this.changetoCurrency}
            name='toCurrency'
            id='to'
            selectedCurrency={toCurrency}
          />
        </div>
        <button>Exchange my money now!</button>
        <p>{isConverted ? updatedText : defaultText}</p>
      </form>
    );
  }
}

export default Converter;
