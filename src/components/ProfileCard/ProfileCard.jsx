import "./styles.css"

function ProfileCard({profileInfo}) { 
  return <div className="profileCard-component"> 
  <img src= {profileInfo.avatar} alt= {`${profileInfo.firstName} ${profileInfo.secondName}`} />   
    <h2>
      {profileInfo.firstName}
      {profileInfo.secondName}
    </h2>   
    <p>
      {job}
    </p>
    <ul>
      <li>{profileInfo.hairColor}</li>
      <li>{profileInfo.height}</li>
    </ul>
    <p>
      {profileInfo.hobby}
    </p>    
  </div>
}

export default ProfileCard;


// avatar, firstName, secondName, job, hairColor, height, hobby