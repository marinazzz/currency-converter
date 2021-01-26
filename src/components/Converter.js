import React, { Component } from 'react';
import ButtonConvert from './ButtonConvert/ButtonConvert';
import CurrencyOptions from './CurrencyOptions/CurrencyOptions';
import InputAmount from './InputAmount/InputAmount';
import SwitchCurrencies from './SwitchCurrencies/SwitchCurrencies';

export class Converter extends Component {
  constructor() {
    super();
    this.state = {
      amount: '',
      baseCurrency: 'NOK',
      toCurrency: 'EUR',
      currencies: [],
      rates: [],
      date: '',
      result: '',
      isConverted: false,
    };
  }
  componentDidMount() {
    this.fetchData(this.state.baseCurrency);
  }

  fetchData = (base) => {
    const api = `https://api.exchangerate.host/latest?base=${base}`;
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        this.setState(
          {
            rates: data.rates,
            date: data.date,
            currencies: [...Object.keys(data.rates).sort()],
          },
          this.calculate
        );
      });
  };

  handleAmountChange = (e) => {
    const { value, name } = e.target;

    this.setState(
      {
        [name]: value,
      },
      this.calculate
    );
  };

  changeBaseCurrency = (e) => {
    this.setState({
      baseCurrency: e.target.value,
    });
    this.fetchData(e.target.value);
  };

  changetoCurrency = (e) => {
    this.setState(
      {
        toCurrency: e.target.value,
      },
      this.calculate
    );
  };

  calculate = () => {
    const { amount, toCurrency, rates } = this.state;
    const conversionResult = (rates[toCurrency] * amount).toFixed(3);
    this.setState({
      result: conversionResult,
    });
  };

  handleConvert = (event) => {
    event.preventDefault();
    const { date } = this.state;
    this.setState(
      {
        isConverted: true,
        date,
      },
      this.calculate
    );
  };

  handleSwitchCurrencies = () => {
    const { baseCurrency, toCurrency } = this.state;
    this.setState({
      baseCurrency: toCurrency,
      toCurrency: baseCurrency,
      result: this.state.result,
    });
    this.fetchData(this.state.toCurrency);
  };

  render() {
    const {
      amount,
      baseCurrency,
      toCurrency,
      currencies,
      isConverted,
      result,
      date,
    } = this.state;

    const defaultText = <p>Converted 💰 will appear here.</p>;
    const updatedText = (
      <p className='App-text'>
        {amount} {baseCurrency} = {result} {toCurrency}
      </p>
    );

    const formatDate = (string) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(string).toLocaleDateString([], options);
    };

    const dateText = (
      <p>
        {' '}
        last updated <time dateTime={date}>{formatDate(date)}</time>{' '}
      </p>
    );

    return (
      <>
        <form onSubmit={this.handleConvert}>
          <InputAmount
            name='amount'
            value={amount}
            id='amount'
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
          <SwitchCurrencies
            handleSwitchCurrencies={this.handleSwitchCurrencies}
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
        </form>
        {isConverted ? updatedText : defaultText}
        {isConverted && dateText}
      </>
    );
  }
}

export default Converter;
