import Toggle from "../Components/Toggle.jsx";

function Card(props) {
  return (
    <div className="card">
      <img src={props.logo} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <Toggle checked={props.isActive} onChange={props.onToggle} />
    </div>
  );
}
export default Card;
