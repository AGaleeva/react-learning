import { type } from "@testing-library/user-event/dist/type";
import "./styles.css";

function Button({name = "Send", type = "button", children}) { // props
  console.log(name); // props
  return <button className="button-component" type = {type}>
    {name} {/* props.name */}
    {children}
  </button>
}

export default Button;