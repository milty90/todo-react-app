import "./Checkbox.css";

function Checkbox({ todo, handleCheckBoxChange }) {
  return (
    <input
      id={todo.id}
      className="checkbox"
      type="checkbox"
      checked={todo.done}
      onChange={handleCheckBoxChange}
    />
  );
}

export default Checkbox;
