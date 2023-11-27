import { useState } from "react";
import Button from "../Button";
import "./styles.css";

function Counter() {

  const [count, setCount] = useState(0);

  // насколько понимаю, введение константы count внутри компонента не требует введения дополнительной функции с использованием prevValue
  const counterPlusHandler = () => {
    if (count >= 0) {
    setCount(count + 1);
  }     
  }  
  const counterMinusHandler = () => { 
    if (count > 0){    
    setCount(count - 1);
  }     
  }  
  
  return (
    <div className="counterContainer">
      <Button 
        onClick={() => counterPlusHandler()} 
        name="+" />
      <div>{count}</div>  
      <Button 
        onClick={() => counterMinusHandler()} 
        name="-" />
    </div>)
}

export default Counter;