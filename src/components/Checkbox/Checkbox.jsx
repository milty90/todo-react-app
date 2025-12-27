import "./Checkbox.css";

function Checkbox({ id, checked, handleCheckBoxChange }) {
  return (
    <input
      id={id}
      className="checkbox"
      type="checkbox"
      checked={checked}
      onChange={handleCheckBoxChange}
    />
  );
}

export default Checkbox;
