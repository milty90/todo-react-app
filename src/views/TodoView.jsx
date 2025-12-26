import { useState } from "react";
import Label from "../components/Label/Label";
import InputItem from "./InputItem/InputItem";
import TodoItem from "./TodoItem";

function TodoView() {
  const [inputValue, setInputValue] = useState("");
  const [todoListState, setTodoListState] = useState([]);

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    const newTodo = { id: Date.now(), text: inputValue, done: false };
    setTodoListState((prevTodos) => [newTodo, ...prevTodos]);
    setInputValue("");
  };

  const deleteTodo = (id) => {
    setTodoListState((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleData = (data) => {
    setInputValue(data);
  };

  const handleChange = (id) => {
    setTodoListState((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div className="todoView">
      <div className="todoHeader">
        <InputItem
          handleChange={handleData}
          saveData={addTodo}
          value={inputValue}
        />
      </div>
      <div className="todoBody">
        {todoListState.length === 0 ? (
          <Label text="Keine Todos vorhanden!" />
        ) : (
          todoListState.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={() => deleteTodo(todo.id)}
              onChange={() => handleChange(todo.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TodoView;
