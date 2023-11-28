import { useState } from 'react';
import Button from '../../components/Button';
import './styles.css'

function Homework19() {

  const [car, setCar] = useState({});

  const showCar = (newCar) => {
    setCar(prevValue => (newCar)); 
  };

  const currCar = Object.keys(car).map((carKeys) => {
    return (
      <li key={`car-props-${Math.random()}`}>
        {carKeys}: {car[carKeys]}
      </li>
    )
  })

  return (
    <div className="homework19-wrapper">

      <div className='itemsControl'>
        Car's properties: 
        <ul>{currCar}</ul>
      </div>

      <div className='buttonControl'>
        <Button 
        name='show properties of the car' 
        onClick={() => showCar({
          brand: "Porsche", 
          model: "911", 
          year: 2023, 
          color: "Silver", 
          price: 120000, 
          isAvailable: true,})} 
        />
      </div> //
    </div>
  );
};

export default Homework19;