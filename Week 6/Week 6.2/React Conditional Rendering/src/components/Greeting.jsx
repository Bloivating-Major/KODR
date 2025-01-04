import React from 'react'

const Greeting = ({timeOfDay}) => {
  return (
    <div>
      <p>{(timeOfDay == 'morning' || timeOfDay == 'afternoon' || timeOfDay == 'night') ? `Good ${timeOfDay}!` : "Good day!"}</p>
    </div>
  )
}

export default Greeting
