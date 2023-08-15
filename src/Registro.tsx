import logo from "./logo.svg";
import "./App.css";
import PdfGenerator from "./pdf_download";

function App() {
  return (
    <div className="bg-purple-900 min-h-screen min-w-screen flex place-content-center">
      <div className="box-content p-10 border-2 border-slate-800 place-self-center bg-white shadow-xl rounded-3xl shadow-current">
        <p className="text-center text-6xl leading-snug ">REGISTRO</p>
        <p className="text-center text-base">Ingresa tus datos para acceder</p>
        <label className="block my-2 mx-auto w-96">
          <span className="text-gray-700">Usuario</span>
          <input
            type="text"
            className="
              mt-0
              block
              w-full
              px-0.5
              border-0 border-b-2 border-gray-200
              focus:ring-0 focus:border-black
            "
            placeholder=""
          />
        </label>
        <label className="block my-2 mx-auto w-96">
          <span className="text-gray-700">Contraseña</span>
          <input
            type="text"
            className="
              mt-0
              block
              w-full
              px-0.5
              border-0 border-b-2 border-gray-200
              focus:ring-0 focus:border-black
            "
            placeholder=""
          />
        </label>
        <label className="block my-2 mx-auto w-96">
          <span className="text-gray-700">Confirmar Contraseña</span>
          <input
            type="text"
            className="
              mt-0
              block
              w-full
              px-0.5
              border-0 border-b-2 border-gray-200
              focus:ring-0 focus:border-black
            "
            placeholder=""
          />
        </label>
        <p className="text-center whitespace-normal text-xs w-96">
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
