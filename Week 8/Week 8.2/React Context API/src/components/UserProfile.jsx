import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const UserProfile = () => {

    const { user} = useContext(UserContext);
    console.log(user);

  return (
    <div>
      User Profile
      <h1>Name : {user.name}</h1>
    </div>
  )
}

export default UserProfile
