import Button from "../Button";
import "./styles.css";

function Counter({count, counterPlusHandler, counterMinusHandler}) {

  // const [count, setCount] = useState(0);
  
  // const counterPlusHandler = () => {    
  //   setCount((prevValue) => prevValue + 1);       
  // }  
  // const counterMinusHandler = () => {        
  //   setCount((prevValue) => prevValue - 1);       
  // }  
  
  return (
    <div className="counterContainer">
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