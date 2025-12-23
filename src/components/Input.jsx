function Input({ onChange, value }) {
  const handleChange = (event) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <input
      className={"input"}
      type={"text"}
      value={value}
      onChange={handleChange}
    />
  );
}

export default Input;
