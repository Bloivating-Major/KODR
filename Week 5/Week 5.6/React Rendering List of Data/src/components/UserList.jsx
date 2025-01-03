import React from 'react'

const UserList = () => {
  const users = [
    {id : 1, name : 'Bob', age : 25},
    {id : 2, name : 'Jhon', age : 31},
    {id : 3, name : 'Alice', age : 40},
  ]
  return (
    <div>
    <h1>Users</h1>
      {users.map(({id, name, age}) => (
        <ul key={id}>
            <li>User Id : {id}</li>
            <li>User Name : {name}</li>
            <li>User Age : {age}</li>
        </ul>
      ))}
    </div>
  )
}

export default UserList
