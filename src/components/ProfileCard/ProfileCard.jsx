import "./styles.css"

function ProfileCard({profileInfo}) { 
  return <div className="profileCard-component"> 
  <img className="avatar" src= {profileInfo.avatar} alt= {`${profileInfo.firstName} ${profileInfo.lastName}`} />   
    <h3>
      {`${profileInfo.firstName} ${profileInfo.lastName}`}
    </h3>   
    <p>
      {`Occupation: ${profileInfo.job}`}
    </p>
    <ul>
      <li>{`Hair color: ${profileInfo.hairColor}`}</li>
      <li>{`Height: ${profileInfo.height}`}</li>      
    </ul>
    <p>
      {`Hobby: ${profileInfo.hobby}`}
    </p>
    {/* 1 из способов показывать или не показывать данные на странице через тернарный оператор */}
      {/* {profileInfo.homePets ? <p>Home pets:</p> : null} */}
      {/* 2 cпособ: синтаксис &&. Левая часть - это ture или false, 
      а правая - это то что мы отображаем, если у нас левая часть = true */}
      {profileInfo.homePets && <p>Home pets:</p>}
      <ul>
        {profileInfo?.homePets?.dog ? (
          <li>Dog: {profileInfo?.homePets.dog}</li>
        ) : null}
        {profileInfo?.homePets?.cat ? (
          <li>Cat: {profileInfo?.homePets.cat}</li>
        ) : null}
      </ul>
  </div>
}

export default ProfileCard;


// avatar, firstName, secondName, job, hairColor, height, hobby