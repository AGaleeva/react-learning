import { useState } from 'react';
import Lesson19 from "./lessons/lesson19";
import "./app.css";
import Counter from "./components/Counter";


function App() {
  const [count, setCount] = useState(0);
  
  const counterPlusHandler = () => {    
    setCount((prevValue) => prevValue + 1);       
  }  
  const counterMinusHandler = () => {        
    setCount((prevValue) => prevValue - 1);       
  } 
  return (
    <div className="App">
      {/* <Lesson19 /> */}      

      <Counter count={count} counterPlusHandler={counterPlusHandler} counterMinusHandler={counterMinusHandler} />       
    </div>
  );  
}

export default App;