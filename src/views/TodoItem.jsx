import Input from "../components/Input";
import Button from "../components/Button";
import Label from "../components/Label";

function TodoItem({ todo, onChange, deleteTodo }) {
  return (
    <div className="todoItemBody">
      <div className="todoItemCheckbox">
        <Input
          className="checkbox"
          type="checkbox"
          onChange={onChange}
          checked={todo.done}
        ></Input>
        <Label text={todo.text} checked={todo.done}></Label>
      </div>
      <Button text="Löschen" onClick={() => deleteTodo(todo.id)}></Button>
    </div>
  );
}

export default TodoItem;
