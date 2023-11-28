import { useState } from "react";
import Button from "../Button";
import "./styles.css";

function Counter() {

  const [count, setCount] = useState(0);
  
  const counterPlusHandler = () => {    
    setCount((prevValue) => prevValue + 1);       
  }  
  const counterMinusHandler = () => {        
    setCount((prevValue) => prevValue - 1);       
  }  
  
  return (
    <div className="counterContainer">
      {/* <Button 
        onClick={() => counterPlusHandler()} 
        name="+" /> */}
      <Button 
        onClick={counterPlusHandler} 
        name="+" />  
      <div>{count}</div>
      <Button 
        onClick={counterMinusHandler} 
        name="-" />  
      {/* <Button 
        onClick={() => counterMinusHandler()} 
        name="-" /> */}
    </div>)
}

export default Counter;