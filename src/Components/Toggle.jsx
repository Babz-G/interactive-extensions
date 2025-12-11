import Switch from "react-switch";

function Toggle(props) {
  return <Switch checked={props.checked} onChange={props.onChange} />;
}
export default Toggle;
