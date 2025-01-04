import React from 'react'
import Person from './components/Person'
import Product from './components/Product'
import Card from './components/Card'

const App = () => {

  return (
    <div>
      <Person name="Sambhav" age="20" />
      <Product name="Asus Rog" price="1000" /> {/* // here we have done destructing of props */}
      <Card>
        {/* Here we are making our component like a tag */}
        <h2>My Card</h2>
        <p>This is Some Content For Card 1</p>
        {/* This is written inside card component not as a prop and now we will pass this information using props.children also you can now directly access this data in card component as props. */}
      </Card>
      <Card>
        <h2>My Card 2</h2>
        <p>This is Some Content For Card 2</p>
      </Card>
    </div>
  )
}

export default App
