import React, { useState } from "react";
import Result from "./components/Result";
import MathOperations from "./components/MathOperations";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import "./App.css";

const App = () => {
  const [texto, setTexto] = useState("");
  console.log("Renderizacion de app");
  return (
    <main className="react-calculator">
      <Result value={texto} />
      <Numbers
        onClickNumber={(number) => {
          console.log("number ", number);
          setTexto(texto + number);
        }}
      ></Numbers>
      <Functions
        onContentClear={(clear) => {
          console.log("delete all ", clear);
          setTexto("");
        }}
        onDelete={(del) => {
          if (texto.length > 0) {
            console.log("delete ", del);
            const textoNuevo = texto.substring(0, texto.length - 1);
            setTexto(textoNuevo);
          }
        }}
      ></Functions>
      <MathOperations
        onClickOperation={(operation) => {
          console.log("operacion: ", operation);
          setTexto(texto + operation);
        }}
        onClikcEqual={(equal) => {
          console.log("equal: ", equal);
          setTexto(texto + equal);
        }}
      ></MathOperations>
    </main>
  );
};

export default App;
