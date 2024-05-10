import { useState, useEffect } from "react";
import UnitInput from "./components/UnitInput/UnitInput";
import "./App.css";

const App = () => {
  const [mass, setMass] = useState(68);
  const [height, setHeight] = useState(170);
  const h = height / 100;
  const BMI = mass / h ** 2;

  return (
    <>
      <div
        id="main"
        className="main"
      >
        <h1>Calculate your BMI</h1>
        <UnitInput
          name="height"
          value={height}
          unit="cm"
          setter={setHeight}
          min="38"
          max="254"
        />
        <UnitInput
          name="mass"
          value={mass}
          unit="kg"
          setter={setMass}
          min="3.1"
          max="250"
        />
        <h2>
          BMI: {BMI.toFixed(2)} kg/m<sup>2</sup>
        </h2>
      </div>

      <button
        onClick={() => {
          console.log(`mass: ${mass}`);
          console.log(`h: ${h}`);
          console.log(mass / (h * h));
        }}
      >
        Show
      </button>
    </>
  );
}

export default App;
