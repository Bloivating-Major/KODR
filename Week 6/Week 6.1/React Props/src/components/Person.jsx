import React from 'react'

const Person = (props) => {
  return (
    <div>
    {/* Here we have done destructing of Props */}
      <h2>Hello my Name is : {props.name}</h2>
      <p>I am {props.age} years old.</p>
    </div>
  )
}

export default Person
