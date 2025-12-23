import Button from "../components/Button";
import Input from "../components/Input";

function InputItem({ onChange, saveData }) {
  return (
    <div className="inputItemBody">
      <Input onChange={onChange} />
      <Button text="Add" onClick={saveData} />
    </div>
  );
}
export default InputItem;
