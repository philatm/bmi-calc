import './style.css'

const MyInput = ({ value, unit, setter, min, max }) => (
  <>
    <h3>Your {unit}: {value} {unit}</h3>
    <input
      id={value}
      value={value}
      type="range"
      min={min}
      max={max}
      step="0.1"
      onChange={(e) => setter(e.target.value)}
    />
  </>
);

export default MyInput