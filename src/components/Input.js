function Input(props) {
  const { input, add } = props;

  return (
    <div className="inputBody">
      <input className="input" onChange={input} />
      <button className="button" onClick={add}>
        Add
      </button>
    </div>
  );
}
export default Input;
