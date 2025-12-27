import "./Label.css";
function Label({ text, checked }) {
  return <label className={`label${checked ? " checked" : ""}`}>{text}</label>;
}

export default Label;
