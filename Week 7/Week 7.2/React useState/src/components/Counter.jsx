import React, { useState } from 'react'

const Counter = () => {

  const [val , setVal ] = useState(0)
  const increment = ()=> setVal(val + 1);
  const decrement = ()=> setVal(val - 1);

  return (
    <div className='flex flex-col gap-5'>
      <h1 className='text-6xl text-red-500 uppercase font-bold'>Count :  {val}</h1>
      <button className='rounded-md text-white font-bold  px-5 py-4 bg-violet-600 text-2xl' onClick={increment}>Increment</button>
      <button className=' rounded-md text-white font-bold  px-5 py-4 bg-yellow-700 text-2xl'  onClick={decrement} >Decrement</button>
    </div>
  )
}

export default Counter
