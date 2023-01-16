import React from "react";
import Button from "./components/Button";
import Result from "./components/Result";
import MathOperations from "./components/MathOperations";
import Functions from "./components/Functions";
import "./App.css";

const App = () => {
  console.log("Renderizacion de app");
  return (
    <main className="react-calculator">
      <Result value={"0"} />
      <div className="numbers">
        <Button
          text={"1"}
          clickHandler={(text) => {
            console.log(text);
          }}
        ></Button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
      </div>
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
