import "../App.css";
import CustomButton from "./CustomButton";

function Card(props) {
  return (
    <div
      className="Card"
      style={{
        backgroundColor: props.complete === true && "gray",
        color: props.complete === true && "white",
      }}
    >
      <h3>{props.title}</h3>
      <p> {props.des}</p>
      <div className="btnWrapper">
        <CustomButton
          color="white"
          bg="green"
          name="Complete"
          click={props.update}
        />
        <CustomButton
          color="white"
          bg="Red"
          name="Delete"
          click={props.delete}
        />
      </div>
    </div>
  );
}
export default Card;
