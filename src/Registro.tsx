import logo from "./logo.svg";
import "./App.css";
import PdfGenerator from "./pdf_download";

function App() {
  return (
    <div className="bg-purple-900 min-h-screen min-w-screen flex place-content-center">
      <div className="box-content p-10 border-2 border-slate-800 place-self-center bg-white shadow-xl rounded-3xl shadow-current">
        <p className="text-center text-6xl leading-snug ">REGISTRO</p>
        <p className="text-center text-base">Ingresa tus datos para acceder</p>
        <div className="box-content border-2 w-64 m-3 border-purple-900 text-base text-gray-500 text-left">
          Usuario
        </div>
        <div className="box-content border-2 w-64 m-3 border-purple-900 text-base text-gray-500 text-left">
          Contraseña
        </div>
        <div className="box-content border-2 w-64 m-3 border-purple-900 text-base text-gray-500 text-left ">
          Confirmar contraseña
        </div>
        <p className="text-center whitespace-normal text-xs">
          Tu clave debe ser de mas de 8 caracteres incluyendo minusculas,
          mayusculas, numeros y caracteres especiales.
        </p>
        <div className="box-content w-96 m-3 w-64 bg-purple-900 text-base text-center text-white shadow-inner rounded-md">
          Siguiente
        </div>
      </div>
    </div>
  );
}

export default App;
