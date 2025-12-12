import Toggle from "../Components/Toggle.jsx";
import Button from "../Components/Button.jsx";

function Card(props) {
  return (
    <div className="card">
      <div className="cardInfo">
        <img src={props.logo} alt={props.name} />
        <div>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
      </div>
      <div className="cardButtons">
        <Button buttonText="Remove" onClick={props.remove} />
        <Toggle checked={props.isActive} onChange={props.toggle} />
      </div>
    </div>
  );
}
export default Card;
