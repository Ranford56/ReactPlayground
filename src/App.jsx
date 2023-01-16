import React from "react";
import Button from "./components/Button";
import Result from "./components/Result";
import MathOperations from "./components/MathOperations";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import "./App.css";

const App = () => {
  console.log("Renderizacion de app");
  return (
    <main className="react-calculator">
      <Result value={"0"} />
      <Numbers
        onClickNumber={(number) => {
          console.log("number ", number);
        }}
      ></Numbers>
      <Functions
        onContentClear={(clear) => {
          console.log("equal ", clear);
        }}
        onDelete={(del) => {
          console.log("delete ", del);
        }}
      ></Functions>
      <MathOperations
        onClickOperation={(operation) => {
          console.log("operacion: ", operation);
        }}
        onClikcEqual={(equal) => {
          console.log("equal: ", equal);
        }}
      ></MathOperations>
    </main>
  );
};

export default App;
