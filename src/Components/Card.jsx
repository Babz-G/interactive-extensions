import Toggle from "../Components/Toggle.jsx";
import Button from "../Components/Button.jsx";

function Card(props) {
  return (
    <div className="card">
      <img src={props.logo} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <Button buttonText="Remove" onClick={props.remove} />
      <Toggle checked={props.isActive} onChange={props.toggle} />
    </div>
  );
}
export default Card;
