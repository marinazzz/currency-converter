import './App.css';
import Converter from './components/Converter';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <div className='App-content'>
          <Converter />
        </div>
      </div>
    </div>
  );
}

export default App;
