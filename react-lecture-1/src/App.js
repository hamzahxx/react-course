import logo from './logo.svg';
import './App.css';

function Hamzah() {
  return (
    <a 
    href='https://hamzahxx.github.io' 
    className='App-link'
    target='_blank'
    >
      hamzah.devs
    </a>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          first react app
        </h2>
        <Hamzah />
      </header>
    </div>
  );
}

export default App;
