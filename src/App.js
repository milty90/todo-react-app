import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import { Todo, TextToAdd } from "./components/Todo";

function App() {
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

  //lifting state up
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

  console.log(todoListState);

  return (
    <div className="App">
      <Input onChange={handleData} saveData={() => addTodo(inputValue)} />
      {todoListState.length === 0 ? (
        <TextToAdd />
      ) : (
        todoListState.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={() => deleteTodo(todo.id)}
            handleChange={() => handleChange(todo.id)}
          />
        ))
      )}
    </div>
  );
}

export default App;
