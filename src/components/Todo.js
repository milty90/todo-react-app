function Todo(props) {
  const { todo, del } = props;
  return (
    <div className="todoBody">
      <div className="todoCheckbox">
        <input className="checkbox" type="checkbox"></input>
        <p className="todo">{todo}</p>
      </div>
      <button onClick={del} className="todoButton">
        Löschen
      </button>
    </div>
  );
}
export default Todo;
