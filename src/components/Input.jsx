function Input({ onChange, type, todo }) {
  //lifting state up
  const handleChange = (event) => {
    const value = event.target.value;
    onChange(value);
  };

  const handleCheckBoxChange = (event) => {
    const updateTodo = { ...todo };
    updateTodo.done = event.target.checked;
    onChange(updateTodo);
  };

  return (
    <input
      className={type === "checkbox" ? "checkbox" : "input"}
      onChange={type === "checkbox" ? handleCheckBoxChange : handleChange}
      type={type}
    />
  );
}

export default Input;
