import "../App.css";
function CustomButton(props) {
  return (
    <buttton
      onClick={props.click}
      className="btn"
      style={{ backgroundColor: props.bg, color: props.color }}
    >
      {props.name}
    </buttton>
  );
}
export default CustomButton;
