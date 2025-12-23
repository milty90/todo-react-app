function Checkbox({ todo, onChange }) {
  const handleCheckBoxChange = (event) => {
    const updateTodo = { ...todo };
    updateTodo.done = event.target.checked;
    onChange(updateTodo);
  };

  return (
    <input
      id={todo.id}
      className="checkbox"
      type="checkbox"
      checked={todo.done}
      onChange={handleCheckBoxChange}
    ></input>
  );
}

export default Checkbox;
