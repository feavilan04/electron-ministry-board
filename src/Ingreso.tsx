import logo from "./logo.svg";
import "./App.css";
import PdfGenerator from "./pdf_download";

function App() {
  return (
    <div className="bg-white min-h-screen min-w-screen">
      <div className="box-content border-gray-500 place-self-center bg-white shadow-xl rounded-3xl">
        <div className="text-center text-3xl text-purple-900">INGRESO</div>
        <div className="box-content w-40 border-2 m-3 border-purple-900 text-base text-black text-left">
          Usuario
        </div>
        <div className="box-content w-40 border-2 m-3 border-purple-900 text-base text-black text-left">
          Contraseña
        </div>
      </div>
    </div>
  );
}
{
}

export default App;
