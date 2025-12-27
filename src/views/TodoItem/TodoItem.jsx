import Button from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox/Checkbox";
import Label from "../../components/Label/Label";
import "./TodoItem.css";

function TodoItem({ todo, onChange, deleteTodo }) {
  return (
    <div className="todoItemBody">
      <div className="todoItemCheckbox">
        <Checkbox
          id={todo.id}
          checked={todo.done}
          handleCheckBoxChange={onChange}
        />
        <Label text={todo.text} checked={todo.done}></Label>
      </div>
      <Button text="Löschen" onClick={deleteTodo}></Button>
    </div>
  );
}

export default TodoItem;
