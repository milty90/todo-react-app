function Todo(props) {
  const { todo, deleteTodo, handleChange } = props;

  const handleCheckBoxChange = (event) => {
    const updateTodo = { ...todo };
    updateTodo.done = event.target.checked;
    handleChange(updateTodo);
  };

  return (
    <div className="todoBody">
      <div className="todoCheckbox">
        <input
          id={todo.id}
          className="checkbox"
          type="checkbox"
          checked={todo.done}
          onChange={handleCheckBoxChange}
        ></input>
        <label htmlFor={todo.id} className="todo">
          {todo.text}
        </label>
      </div>
      <button onClick={deleteTodo} className="todoButton">
        Löschen
      </button>
    </div>
  );
}

function TextToAdd() {
  return <p className="no-todo">Keine Todo</p>;
}

export { Todo, TextToAdd };
