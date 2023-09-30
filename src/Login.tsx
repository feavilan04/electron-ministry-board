import logo from "./logo.svg";
import "./App.css";
import PdfGenerator from "./pdf_download";

function App() {
  return (
    <div className="bg-white min-h-screen min-w-screen flex">
      <p className="text-purple-900 text-6xl">Bienvenidos a Ministry Board</p>
      <div className="box-content px-10 py-8 border-gray-500 bg-gray-400 shadow-xl rounded-3xl">
        <p className="text-center text-3xl text-purple-900">INGRESO</p>
        <label className="block my-2 mx-auto w-40">
          <span className="text-black">Usuario</span>
          <input
            type="text"
            className="
              mt-0
              block
              w-full
              px-0.5
              border-0 border-b-2 border-black
              focus:ring-0 focus:border-black
            "
            placeholder=""
          />
        </label>
        <label className="block my-2 mx-auto w-40">
          <span className="text-black">Contraseña</span>
          <input
            type="text"
            className="
              mt-0
              block
              w-full
              px-0.5
              border-0 border-b-2 border-black
              focus:ring-0 focus:border-black
            "
            placeholder=""
          />
        </label>
        <button className="box-content m-3 w-40 bg-purple-900 text-base text-center text-white shadow-inner rounded-md">
          Iniciar sesión
        </button>
      </div>
    </div>
  );
}
{
}

export default App;
