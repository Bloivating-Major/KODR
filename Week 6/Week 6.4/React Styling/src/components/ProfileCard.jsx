import React from 'react'

const ProfileCard = () => {

    const mainDiv = {display: "flex", justifyContent: "center" , padding : "5em"};
    const card = {width: "15em", padding: "1em" , display: "flex" , flexDirection : "column" , gap : "1em" , borderRadius : "10px" , color : "black" , backgroundColor : "lightgray" }

  return (
    <div style={mainDiv}>
        
    <div style={card}>
        <h2>Profile Card</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem in iure alias modi ad!</p>
    </div>

</div>
  )
}

export default ProfileCard
