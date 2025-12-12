import Switch from "react-switch";

function Toggle(props) {
  return (
    <Switch
      checked={props.checked}
      onChange={props.onChange}
      onColor="#df473f"
      offColor="#888888"
      uncheckedIcon={false}
      checkedIcon={false}
    />
  );
}
export default Toggle;
