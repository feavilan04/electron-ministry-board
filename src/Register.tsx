import logo from "./logo.svg";
import "./App.css";
import PdfGenerator from "./pdf_download";
import { useState, useRef } from "react";

function App() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const validateRef = useRef("");

  const [length, setLength] = useState(false);
  const [has_upper, setHasUpper] = useState(false);
  const [has_lower, setHasLower] = useState(false);
  const [has_special_character, setHasSpecialCharacter] = useState(false);
  const [has_number, setHasNumber] = useState(false);

  const validation = (value: string) => {
    const lower = new RegExp("([a-z]+)");
    const upper = new RegExp("([A-Z]+)");
    const special_character = new RegExp("([#?!@$%^&*-,;.:\\/]+)");
    const number = new RegExp("([0-9]+)");

    if (value.length >= 8) {
      setLength(true);
    } else {
      setLength(false);
    }

    if (upper.test(value)) {
      setHasUpper(true);
    } else {
      setHasUpper(false);
    }

    if (lower.test(value)) {
      setHasLower(true);
    } else {
      setHasLower(false);
    }

    if (special_character.test(value)) {
      setHasSpecialCharacter(true);
    } else {
      setHasSpecialCharacter(false);
    }

    if (number.test(value)) {
      setHasNumber(true);
    } else {
      setHasNumber(false);
    }
  };

  return (
    <div className="bg-purple-900 min-h-screen min-w-screen flex place-content-center">
      <div className="box-content px-20 py-9 border-2 border-slate-800 place-self-center bg-white shadow-xl rounded-3xl shadow-current">
        <p className="text-center text-6xl leading-snug ">REGISTRO</p>
        <p className="text-center text-base">Ingresa tus datos para acceder</p>
        <label className="block my-2 mx-auto w-64">
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
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder=""
          />
        </label>
        <label className="block my-2 mx-auto w-64">
          <span className="text-gray-700">Contraseña</span>
          <input
            type="password"
            className="
              mt-0
              block
              w-full
              px-0.5
              border-0 border-b-2 border-gray-200
              focus:ring-0 focus:border-black
            "
            placeholder=""
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validation(e.target.value);
            }}
          />
        </label>
        <label className="block my-2 mx-auto w-64">
          <span className="text-gray-700">Confirmar Contraseña</span>
          <input
            type="password"
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
        <p className="whitespace-normal text-xs w-64 my-2 mx-auto">
          Tu clave debe contener:
        </p>
        <ul className="text-xs w-64 my-2 mx-auto">
          <li
            className={
              length
                ? "custom-list-item text-green-500"
                : "custom-list-item-fail text-red-500"
            }
          >
            Más de 8 caracteres
          </li>
          <li
            className={
              has_lower
                ? "custom-list-item text-green-500"
                : "custom-list-item-fail text-red-500"
            }
          >
            Al menos una letra en minuscula
          </li>
          <li
            className={
              has_upper
                ? "custom-list-item text-green-500"
                : "custom-list-item-fail text-red-500"
            }
          >
            Al menos una letra en mayuscula
          </li>
          <li
            className={
              has_special_character
                ? "custom-list-item text-green-500"
                : "custom-list-item-fail text-red-500"
            }
          >
            Al menos un caracter especial
          </li>
          <li
            className={
              has_number
                ? "custom-list-item text-green-500"
                : "custom-list-item-fail text-red-500"
            }
          >
            Al menos un número
          </li>
        </ul>

        <button className="box-content m-3 w-64 bg-purple-900 text-base text-center text-white shadow-inner rounded-md">
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default App;
