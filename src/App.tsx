import React from 'react';
import logo from './logo.svg';
import './App.css';
import PdfGenerator from './pdf_download';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and nuevo valor.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <PdfGenerator/>
      </header>
    </div>
  );
}

export default App;
