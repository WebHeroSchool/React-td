import logo from './logo.svg';
import './App.css';

const count = 40;
const flag = true;
const ring = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: 'green',
          fontSize: 45
        }}> Hello World!
        </p>
        <p style={{
          fontSize: 10+10
          }}> Hello World!
        </p>
        <p>{count}
        </p>
        <p>
          {flag && 'Flag is true'}
          {undefined}
          {null}
          {false}
          {true}
        </p>
        <p> {ring ? 'Ring is true' : 'Ring is false'}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;