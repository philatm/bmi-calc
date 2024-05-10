import "./style.css"

const LegendItem = ({ color, state }) => (
  <div>
    <div className="square" style={{ background: color}}></div>
    <span> - {state}</span>
  </div>
)
export default LegendItem;