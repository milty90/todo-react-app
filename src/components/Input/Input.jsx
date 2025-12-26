import "./Input.css";

function Input({ handleChange, value }) {
  return (
    <input
      className="input"
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
}

export default Input;
