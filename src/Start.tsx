import logo from "./logo.svg";
import "./App.css";
import PdfGenerator from "./pdf_download";

function App() {
  return (
    <div className="bg-white min-h-screen min-w-screen flex">
      <p className="text-purple-900 text-6xl">Bienvenidos a Ministry Board</p>
      <div className="box-content px-10 py-8 w-64 border-gray-500 place-self-center bg-gray-400 shadow-xl rounded-3xl">
        <p className="text-black text-center whitespace-normal text-md my-2 mx-auto">
          Lorem Ipsum es simplemente el texto de relleno de, las imprentas y
          archivos de texto. Lorem Ipsum ha,
        </p>
        <button className="box-content m-3 w-64 bg-purple-900 text-base text-center text-white shadow-inner rounded-md">
          Registrar
        </button>
      </div>
    </div>
  );
}
{
}

export default App;
