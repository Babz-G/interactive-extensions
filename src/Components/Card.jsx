function Card(props) {
  return (
    <div className="card">
      <img src={props.logo} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
}
export default Card;
