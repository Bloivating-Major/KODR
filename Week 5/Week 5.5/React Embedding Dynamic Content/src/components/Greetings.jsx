import React from 'react'

const Greetings = () => {
  
  let greetings = "Hello There";
  let date = new Date();

  return (
    <div>
      <h1>{greetings}</h1>
      <p>Date  : {date.getDate()}</p>
    </div>
  )
}

export default Greetings
