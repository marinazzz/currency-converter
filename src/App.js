import './App.css';
import Converter from './components/Converter';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Currency Converter</h1>
      </header>
      <div className='App-content'>
        <Converter />
      </div>
    </div>
  );
}

export default App;
