import React, { Component } from 'react';
import ButtonConvert from './ButtonConvert/ButtonConvert';
import CurrencyOptions from './CurrencyOptions/CurrencyOptions';
import InputAmount from './InputAmount/InputAmount';

export class Converter extends Component {
  constructor() {
    super();
    this.state = {
      originalAmount: '',
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

  handleAmountChange = (e) => {
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
    const updatedText = `${originalAmount} ${baseCurrency} = ${converted} ${toCurrency}`;

    return (
      <form onSubmit={this.handleConvert}>
        <InputAmount
          name='originalAmount'
          value={originalAmount}
          id='originalAmount'
          handleAmountChange={this.handleAmountChange}
        />
        <CurrencyOptions
          labelName='from'
          currencyOptions={currencies}
          onChangeCurrency={this.changeBaseCurrency}
          name='baseCurrency'
          id='from'
          selectedCurrency={baseCurrency}
        />
        <CurrencyOptions
          labelName='to'
          currencyOptions={currencies}
          onChangeCurrency={this.changetoCurrency}
          name='toCurrency'
          id='to'
          selectedCurrency={toCurrency}
        />
        <ButtonConvert />
        <p>{isConverted ? updatedText : defaultText}</p>
      </form>
    );
  }
}

export default Converter;
