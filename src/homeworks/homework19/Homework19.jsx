import { useState } from 'react';
import Button from '../../components/Button';
import './styles.css'

// 
const porscheCar = { 
  brand: "Porsche", 
  model: "911", 
  year: 2023, 
  color: "Silver", 
  price: 120000, 
  isAvailable: true,
};

function Homework19() {

  const [car, setCar] = useState({});
  
  const showCar = (newCar) => {
      setCar(newCar); 
  };

  //  const showCar = (newCar) => {
  //   setCar(prevValue => (newCar)); 

  // в данном случае вы не используете prevValue - соответсвенно функция обратного вызова вам не нужна если вы просто хотите передать туда новый обьект и вам не нужно знать что там было до него. Если же вам нужен предыдущий обьект в car, тогда нужно например обьеденить с новым как мы делали в классе:
  // например: setCar(prevValue => ({...prevValue, ...newCar}));


  // создаем динамически массив эл-в <li></li> с использованием метода Object.keys(), получая массив ключей ['brand', 'model', 'year', 'color', 'price', 'isAvailable']. carKey - каждый из ключей массива, по которому мы достаем значение на каждой итерации цикла метода map - car[carKey].

  // первичный метод

  // const currCar = Object.keys(car).map((carKey) => {
  //   return (
  //     <li key={`car-props-${Math.random()}`}>
  //       {carKey}: {`${car[carKey]}`}
  //     </li>
  //   )
  // })

  // модернизация метода

  const currCar = Object.keys(car).map((carKey) => {

    const carContent = () => {
    if (carKey === 'isAvailable') {
      if (car[carKey]) {
        return 'Available';
      }
      return 'Unavailable';
    }
    return `${carKey}: ${car[carKey]}`
  }
    return (
      <li key={`car-props-${Math.random()}`}>
        {carContent()}
      </li>
    )
  })

  return (
    <div className="homework19-wrapper">
      
      <div className='buttonControl'>
        <Button 
        name='show properties of the car' 
        onClick={() => showCar(porscheCar)} 
        />
      </div> 

      <div className='itemsControl'>
        Car's properties: 
        {!!Object.keys(car).length && <ul>{currCar}</ul>} // !! проверяет выражение - true или false
      </div>
    </div>
  );
};

export default Homework19;