function Checkbox({ todo, onChange }) {
  return (
    <input
      id={todo.id}
      className="checkbox"
      type="checkbox"
      checked={todo.done}
      onChange={onChange}
    ></input>
  );
}

export default Checkbox;
