import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./InputItem.css";

function InputItem({ handleChange, saveData, value }) {
  const onInputChange = (event) => {
    const inputValue = event.target.value;
    handleChange(inputValue);
  };
  return (
    <div className="inputItemBody">
      <Input handleChange={onInputChange} value={value} />
      <Button text="Add" onClick={saveData} />
    </div>
  );
}
export default InputItem;
