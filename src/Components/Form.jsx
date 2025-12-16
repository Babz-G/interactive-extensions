function Form(props) {
  return (
    <div className="form-container">
      <h2>Add New Extension</h2>

      <label>Name:</label>
      <input
        type="text"
        placeholder="Extension name"
        value={props.newExt.name}
        onChange={(e) => props.handleForm("name", e.target.value)}
      />
      <label>Description:</label>
      <input
        type="text"
        placeholder="Extension description"
        value={props.newExt.description}
        onChange={(e) => props.handleForm("description", e.target.value)}
      />

      <div className="form-buttons">
        <button onClick={props.submitForm}>Add Extension</button>
      </div>
    </div>
  );
}

export default Form;
