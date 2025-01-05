import React from 'react'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import Profile from './components/Profile'
import ShoppingList from './components/ShoppingList'

const App = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen bg-gray-300'>
      {/* <Counter /> */}
      {/* <TodoList /> */}
      {/* <Profile /> */}
      <ShoppingList />
    </div>
  )
}

export default App
