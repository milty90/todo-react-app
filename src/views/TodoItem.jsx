import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import Label from "../components/Label";

function TodoItem({ todo, onChange, deleteTodo }) {
  return (
    <div className="todoItemBody">
      <div className="todoItemCheckbox">
        <Checkbox todo={todo} onChange={onChange} />
        <Label text={todo.text} checked={todo.done}></Label>
      </div>
      <Button text="Löschen" onClick={deleteTodo}></Button>
    </div>
  );
}

export default TodoItem;
