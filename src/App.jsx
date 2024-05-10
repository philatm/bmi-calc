import { useState, useEffect } from "react";
import UnitInput from "./components/UnitInput/UnitInput";
import "./App.css";

function getBMIColor(BMI) {
  if (BMI < 16) {
    return "#00FFF0";
  }
  if (BMI < 18.5) {
    return "#00FFFF";
  }
  if (BMI < 25) {
    return "#00FF00";
  }
  if (BMI < 30) {
    return "#ADFF2F";
  }
  if (BMI < 35) {
    return "#FFFF00"
  }
  if (BMI < 40) {
    return "#FF8000"
  }
  return "#F00000"
}
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
        <h2 style={{color: getBMIColor(BMI) }}>
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
};

export default App;
