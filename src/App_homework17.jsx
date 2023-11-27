import "./app.css";
import Button from "./components/Button";
import ProfileCard from "./components/ProfileCard";

function App() {  
  
  const profileInfo1 = {
    avatar: "https://99px.ru/sstorage/1/2016/08/image_11408160131324475937.gif",
    firstName: 'Marie',
    lastName: 'Grinde', 
    job: 'pet handler',
    hairColor: 'blond',
    height: 167,
    hobby: 'chating',
    homePets: {
      dog: "Spyke",
      cat: "Tom",
    },
  }

  const profileInfo2 = {
    avatar: "https://99px.ru/sstorage/1/2022/02/image_11602221441554073687.gif",
    firstName: 'John',
    lastName: 'Smith', 
    job: 'lawyer', 
    hairColor: 'brunette',
    height: 183,
    hobby: 'travelling',
  }

  const profileInfo3 = {
    avatar: "https://99px.ru/sstorage/1/2020/09/image_10409200805469676138.jpg",
    firstName: 'Ewan',
    lastName: 'Bob', 
    job: 'sales manager',
    hairColor: 'brown',
    height: 179,
    hobby: 'meditate',
  }

  return (
    <div className="App">          
    
      <div className="profileCard-container">
        <ProfileCard profileInfo={profileInfo1} />
      </div>        
      <div className="profileCard-container">
        <ProfileCard profileInfo={profileInfo2} />        
      </div>        
      <div className="profileCard-container">
        <ProfileCard profileInfo={profileInfo3} />        
      </div>           
      
    </div>   
  );  
}
export default App;
