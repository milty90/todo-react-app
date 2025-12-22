import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Todo from "./components/Todo";

function TextToAdd() {
  return <p className="no-todo">Keine Todo</p>;
}

function App() {
  let todoList = [];

  const [inputValue, setInputValue] = useState("");
  const [todoListState, setTodoListState] = useState(todoList);

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodoListState([inputValue, ...todoListState]);
    setInputValue("");
  };

  const deleteTodo = (index) => {
    const newTodos = [...todoListState];
    newTodos.splice(index, 1);
    setTodoListState(newTodos);
  };

  //lifting state up
  const handleData = (data) => {
    setInputValue(data);
  };

  return (
    <div className="App">
      <Input onChange={handleData} saveData={() => addTodo(inputValue)} />
      {todoListState.length === 0 ? (
        <TextToAdd />
      ) : (
        todoListState.map((todo, index) => (
          <Todo key={index} todo={todo} deleteTodo={() => deleteTodo(index)} />
        ))
      )}
    </div>
  );
}

export default App;
