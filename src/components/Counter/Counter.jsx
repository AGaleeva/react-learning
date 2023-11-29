import Button from "../Button";
import "./styles.css";

function Counter({count, counterPlusHandler, counterMinusHandler, text}) {  // введение дополнительного параметра для гибкости, см.ниже

  // const [count, setCount] = useState(0);
  
  // const counterPlusHandler = () => {    
  //   setCount((prevValue) => prevValue + 1);       
  // }  
  // const counterMinusHandler = () => {        
  //   setCount((prevValue) => prevValue - 1);       
  // }  
  
  return (
    <div className="counterContainer">
      {text && <p>{text}</p>}             // введение дополнительного параметра для гибкости
      <div className="button-container">
        <Button 
          onClick={counterMinusHandler} 
          name="-" />  
      </div>  
      <div>{count}</div>
      <div className="button-container">
        <Button 
          onClick={counterPlusHandler} 
          name="+" />   
      </div>
    </div>)
}

export default Counter;