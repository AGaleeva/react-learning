import "./app.css";
import Button from "./components/Button";
import Modal from "./components/Modal";

export const animal = "Dog";

function App() {
  const name = <p>My name is Anastasia</p>;
  const job = "frontend developer";
  const tegJobId = 'job';

  const characters = {
    hair: "black",
    height: "185",
  };
  const sum = (a, b) => a + b;

  const numberOfFriends = (count) => {
    if (count > 5) {
      return `У Вас ${count} друзей`;
    } else {
      return 'У вас менее 5 друзей';
    }
  };

  const rich = true;

  const buttonNames = [
    "Отправить",
    "Получить товар",
    "Купить",
    "Заказать",
    "Продать"
  ];

  const buttons = buttonNames.map((value) => {
    console.log(value);
    return (
      <div className="button-container">
        <Button name = {value} />
      </div>
    );
  });
  
  console.log(buttons);

  return (
    <div className="App">      

      <Modal>
        <p>Name: Alex</p>
        <p>age: 28</p>
        {numberOfFriends(6)}
      </Modal>

      {buttons}  
      
      {/* <div className="button-container">
        <Button name = "Отправить" />
      </div>      
      <div className="button-container">
        <Button name = "Получить товар" />        
        </div>
      <div className="button-container">
        <Button name = "Купить" />        
        </div>      
      <div className="button-container">
        <Button  name = "Заказать" />
      </div>      
      <div className="button-container">
        <Button name = "Продать" />
      </div>       */}

    </div>
  );  
}

export default App;
// export {App};
