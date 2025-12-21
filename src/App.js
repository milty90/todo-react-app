import "./App.css";
import Input from "./components/Input";
import Todo from "./components/Todo";

let todoList = [];

function addTodo(todo) {
  todoList.push(todo);
  console.log("TODO: ", todoList.length);
}

function App() {
  return (
    <div className="App">
      <Input add={addTodo()} />
    </div>
  );
}

export default App;
