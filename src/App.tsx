import logo from "./logo.svg";
import "./App.css";
import PdfGenerator from "./pdf_download";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and try updating this file.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a className="App-link" href="/error" rel="noopener noreferrer">
          Error link
        </a>
        <a className="App-link" href="/register" rel="noopener noreferrer">
          Register
        </a>
        <PdfGenerator />
      </header>
    </div>
  );
}

export default App;
