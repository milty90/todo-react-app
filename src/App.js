import { useState } from "react";
import "./App.css";
import Input from "./components/Input";

let todoList = [];

function addTodo(todo) {
  todoList.push(todo);

  todoList.forEach((todo) => console.log(todo));
}

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleData = (data) => {
    setInputValue(data);
  };

  return (
    <div className="App">
      <Input onChange={handleData} saveData={addTodo(inputValue)} />
    </div>
  );
}

export default App;
