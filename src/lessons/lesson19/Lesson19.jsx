import { useState } from 'react';
import Button from '../../components/Button'
import Counter from '../../components/Counter'

import "./styles.css";

function Lesson19() { 
  const [item, setItems]  = useState(['apple']);

  const newItems = item.map((el) => {
    // ключ надо передавать там, где используется метод мэп, чтобы реакт быстрее мог динамически отображать потомков
    return <div key={`fruits-items-${Math.random()}`} >{el}</div>;
  });

  const addFruits = (newFruitsArray) => {
    setItems(prevValue => [...prevValue, ...newFruitsArray]);
  }

  const [person, setPerson] = useState({name: 'Kate', age: 28});

  // example with initialValue
  const addPersonHairColor = (colorHair) => {
    setPerson(prevValue => ({...prevValue, colorHair})); //colorHair: colorHair
  };

  // example without initialValue
  const [name, setName] = useState();
  console.log(name);

  const newPersons = Object.keys(person).map((personKeys) => {
    return (
      <li  key={`person-props-${Math.random()}`} >
        {personKeys}: {person[personKeys]} 
        </li>
      )
  });

  console.log(newPersons);
  //console.log(newItems);

  const [img, setImg] = useState();  

  const addImg = (imgURL) => {
    setImg(imgURL);
  }

  const [count, setCount] = useState(0);
  
  const counterPlusHandler = () => {    
    setCount((prevValue) => prevValue + 1);       
  }  
  const counterMinusHandler = () => {        
    setCount((prevValue) => prevValue - 1);       
  } 
  
  return <div className="lesson19-wrapper">
    <div className='itemsControl'>
      <div> {newItems} </div>
    </div>
    <div className='buttonControl'>
      <Button 
      name='Add fruits' 
      onClick={() => addFruits(['cherry', 'orange'])} 
      />
    </div>
    <div className='itemsControl'>
      Person properties: 
      <ul>{newPersons}</ul>
    </div>
     <div className='buttonControl'>
      <Button 
      name='Add hair color' 
      onClick={() => addPersonHairColor('black')} 
      />
    </div>

    <div>Counter</div>
    <Counter count={count} counterPlusHandler={counterPlusHandler} counterMinusHandler={counterMinusHandler} />

    <div className='buttonControl'>
      <Button 
      name='Set name' 
      onClick={() => setName('Alex')}      
      />  
      {name}
    </div> 

    <div>Example with img</div>    
    <div className='buttonControl'>
     {img && <img className='imgControl' src={img} />}
     <div className='buttonControl'>
        <Button 
        name='add img' 
        onClick={() => addImg("https://www.azcentral.com/gcdn/-mm-/fd5c5b5393c72a785789f0cd5bd20acedd2d2804/c=0-350-2659-1850/local/-/media/Phoenix/BillGoodykoontz/2014/04/24//1398388295000-Homer-Simpson.jpg?width=2659&height=1500&fit=crop&format=pjpg&auto=webp")}      
        />       
      </div>
    </div> 
  </div> 
}

export default Lesson19;