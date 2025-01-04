import React from 'react'
import Weather from './components/Weather'
import UserStatus from './components/UserStatus'
import Greeting from './components/Greeting'

const App = () => {
  return (
    <div>
      <Weather temperature={10} />
      <Weather temperature={20} />
      <Weather temperature={30} />
      <UserStatus loggedIn={true} isAdmin={true}  />
      <UserStatus loggedIn={true} isAdmin={false}  />
      <Greeting timeOfDay="morning" />
      <Greeting timeOfDay="afternoon" />
      <Greeting timeOfDay="evening" />
      <Greeting timeOfDay="night" />
    </div>
  )
}

export default App
