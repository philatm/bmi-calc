import { useState, useEffect } from "react";
import UnitInput from "./components/UnitInput/UnitInput";
import LegendItem from "./components/LegendItem/LegendItem";
import "./App.css";

function getBMIColor(BMI) {
  if (BMI < 16) {
    return "#0000F0";
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
    return "#FFFF00";
  }
  if (BMI < 40) {
    return "#FF8000";
  }
  return "#F00000";
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
        <h2 style={{ color: getBMIColor(BMI) }}>
          BMI: {BMI.toFixed(2)} kg/m<sup style={{ color: getBMIColor(BMI) }}>2</sup>
        </h2>
        <div className="legend">
          <LegendItem color={getBMIColor(14)} state="Underweight (Severe thinness)" />
          <LegendItem color={getBMIColor(17)} state="Underweight (Moderate thinness)" />
          <LegendItem color={getBMIColor(20)} state="Normal range" />
          <LegendItem color={getBMIColor(27)} state="Overweight (Pre-obese)" />
          <LegendItem color={getBMIColor(32)} state="Obese (Class I)" />
          <LegendItem color={getBMIColor(37)} state="Obese (Class II)" />
          <LegendItem color={getBMIColor(42)} state="Obese (Class III)" />

        </div>
      </div>
    </>
  );
};

export default App;
