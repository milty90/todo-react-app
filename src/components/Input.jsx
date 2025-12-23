function Input(props) {
  const { onChange, saveData } = props;

  //lifting state up
  const handleChange = (event) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <div className="inputBody">
      <input className="input" onChange={handleChange} />
      <button className="button" onClick={saveData}>
        Add
      </button>
    </div>
  );
}
export default Input;
