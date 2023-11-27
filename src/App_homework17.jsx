import "./app.css";
import Button from "./components/Button";
import Modal from "./components/Modal";
import ProfileCard from "./components/ProfileCard";
import Avatar from "./components/Avatar";

export const animal = "Dog";

function App() {
  let name = <p>FirstName1 SecondName1</p>;
  let job = <p>job 1</p>;  
  const characters = {
    hair: "black",
    height: "185",
  };
  let hobby = <p>hobby 1</p>;
   
  console.log(buttons);

  return (
    <div className="App">          
    
      <div className="profileCard-container">
        <ProfileCard>           
          <p></p>
          <p character = "brown"></p>
          <p character = {characters.height}></p>
          <p></p>          
        </ProfileCard>

      </div>        
      
    </div>   
  );  
}
export default App;
// export {App};