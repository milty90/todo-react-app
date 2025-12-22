function Todo(props) {
  const { todo, deleteTodo } = props;
  return (
    <div className="todoBody">
      <div className="todoCheckbox">
        <input className="checkbox" type="checkbox"></input>
        <p className="todo">{todo}</p>
      </div>
      <button onClick={deleteTodo} className="todoButton">
        Löschen
      </button>
    </div>
  );
}
export default Todo;
