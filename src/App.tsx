import logo from "./logo.svg";
import "./App.css";
import PdfGenerator from "./pdf_download";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  //const history = useHistory();
  useEffect(() => {
    const perron = Math.floor(Math.random() * 100);
    if (perron < 50) {
      navigate("/register");
    }
  }, [navigate]);
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
        <Link to="/error">
          <h2>Error</h2>
        </Link>
        <Link to="/register">
          <h2>Register</h2>
        </Link>
        <PdfGenerator />
      </header>
    </div>
  );
}

export default App;
