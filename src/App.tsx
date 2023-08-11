import logo from "./logo.svg";
import "./App.css";
import PdfGenerator from "./pdf_download";

function App() {
  return (
    <div className="bg-purple-900 min-h-screen min-w-screen flex place-content-center">
      <div className="box-content  p-10 border-2 border-slate-800 place-self-center bg-white shadow-md shadow-current">
        <p className="text-center text-6xl tracking-wider leading-snug">
          REGISTRO
        </p>
        <p className="text-center text-base tracking-wider ">
          Ingresa tus datos para acceder
        </p>
        <div className="box-content w-72 border-2 border-purple-900 text base text-gray-500 text-left">
          Usuario
        </div>
        <div className="box-content border-2 border-purple-900 text base text-gray-500 text-left">
          Contraseña
        </div>
        <div className="box-content border-2 border-purple-900 text base text-gray-500 text-left ">
          Confirmar contraseña
        </div>
      </div>
    </div>
  );
}
{
  /*holaaaa*/
}

export default App;
