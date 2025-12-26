import Button from "../components/Button/Button";
import Checkbox from "../components/Checkbox/Checkbox";
import Label from "../components/Label/Label";

function TodoItem({ todo, onChange, deleteTodo }) {
  const handleCheckBoxChange = (event) => {
    const updatedTodo = { ...todo };
    updatedTodo.done = event.target.checked;
    onChange(updatedTodo);
  };

  return (
    <div className="todoItemBody">
      <div className="todoItemCheckbox">
        <Checkbox
          todo={todo}
          onChange={onChange}
          handleCheckBoxChange={handleCheckBoxChange}
        />
        <Label text={todo.text} checked={todo.done}></Label>
      </div>
      <Button text="Löschen" onClick={deleteTodo}></Button>
    </div>
  );
}

export default TodoItem;
