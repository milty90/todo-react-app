import Button from "../components/Button";
import Input from "../components/Input";

function InputItem({ onChange, saveData, value }) {
  return (
    <div className="inputItemBody">
      <Input onChange={onChange} value={value} />
      <Button text="Add" onClick={saveData} />
    </div>
  );
}
export default InputItem;
