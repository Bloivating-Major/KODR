import React from 'react'

const Weather = ({temperature}) => {
  
    let message;
    if(temperature < 15)  message = "It's Cold Outside."
    else if(temperature>= 15 && temperature<=25) message = "It's Nice Outside."
    else message = "It's Hot Outside."
    
  return (
    <div>
          <h2>Weather</h2>
          <p>Current temperature: {temperature}°C</p>
          <p>Conditions: {message}</p>
    </div>
  )
}

export default Weather
