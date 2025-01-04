import React from 'react'

const UserStatus = ({loggedIn, isAdmin}) => {

    // console.log(loggedIn, isAdmin);
    let message = 'Welcome ';
    // if(loggedIn){
    //     if(isAdmin){
    //         message += "Admin";
    //     }else{
    //         message += "User";
    //     }
    // }else message += "Guest";

  return (
    <div>
      <p>{(loggedIn && isAdmin) ? message+="Admin" : message+= "User"}</p>
    </div>
  )
}

export default UserStatus
