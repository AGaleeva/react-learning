import { useState } from 'react';

import Button from "../../components/Button";
import "./styles.css"

const showSum = (a, b) => console.log(a + b); 

function Lesson18() {
  // useState() explanation
  // useState() - это хук (hook)

  const [name, setName] = useState('Robert'); // inside () ---> initial values: name = Robert; setNames - is a function changing name's values
  console.log(name); // Robert

  const [isShowMessage, setIsShowMessage] = useState(false);

  const [count, setCount] = useState(0);

  const changeName = () => {
    setName('Ekaterina'); // setName меняет значение useState
  }

  const counterHandler = () => {
   // setCount(count + 1); 
    setCount((prevValue) => prevValue + 1); // используем синтаксис функции для передачи нового значения
  }  
  return(
    <div>
      <div className="buttonContol">
        <Button 
        onClick={() => showSum(2, 3)} 
        name="Показать сообщение 1" />
      </div>
      <div className="buttonContol">
        <Button 
        onClick={() => console.log('Hello world 2!')} 
        name="Показать сообщение 2" />
      </div>
      <p>{name}</p>
      <div className="buttonContol">
        <Button 
        onClick={() => changeName()} 
        name="Изменить имя" />
      </div>
      {isShowMessage && <div>State is true now</div>}
      <div className="buttonContol">
        <Button 
        onClick={() => setIsShowMessage(!isShowMessage)} 
        name="Показать сообщение" />
      </div>
      <div>Count: {count}</div>
      <div className="buttonContol">
        <Button 
        onClick={() => counterHandler()} 
        name="Увеличить на 1" />
      </div>
    </div>
  );

}

export default Lesson18;