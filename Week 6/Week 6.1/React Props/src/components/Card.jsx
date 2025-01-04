import React from 'react'

const Card = ({children}) => {
  return (
    <div>
    {/* {props.children}  This is Normally done using prop but we can destructure it. */}
    {children}
    </div>
  )
}

export default Card
