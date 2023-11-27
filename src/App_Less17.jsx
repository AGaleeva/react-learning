import "./App.css";
import Button from "./components/Button";
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

  return (
    <div className="App">
      {name}
      <p id="{tegJobId}">I am {job}</p>
      <p>Возвращаемая сумма: {sum(2, 2)}</p>
      <p>Характеристики</p>
      <ul>
        <li>Цвет волос: {characters.hair}</li>
        <li>Рост: {characters.height}</li>
      </ul>
      <p>Любимое животное: {animal}</p>
      <div>{numberOfFriends(7)}</div>
      <div>{rich ? "Вы богатый" : "У вас недостаточно средств"}</div>
      <div className="button-container">
        <Button name = "Отправить" type="submit" />
      </div>      
      <div className="button-container">
        <Button name = "Получить товар" type="submit" />
      </div>      
      <div className="button-container">
        <Button>Children elelment</Button>
      </div>      
      <div className="button-container">
        <Button />
      </div>      
    </div>
  );  
}

export default App;
// export {App};