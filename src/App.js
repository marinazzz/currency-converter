import './App.css';
import Converter from './components/Converter';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <div className='app-container'>
        <div className='app-content'>
          <Converter />
        </div>
      </div>
    </>
  );
}

export default App;
