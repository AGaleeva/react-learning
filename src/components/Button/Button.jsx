import { type } from "@testing-library/user-event/dist/type";
import "./styles.css";

function Button({name = "Send", type = "button", children, onClick}) { // props
  
  return <button onClick = {onClick} className="button-component" type = {type}>
    {name} {/* props.name */}
    {children}
  </button>
}

export default Button;