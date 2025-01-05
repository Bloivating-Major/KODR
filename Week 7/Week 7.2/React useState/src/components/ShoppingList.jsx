import React, { useState } from 'react'

const ShoppingList = () => {

    const [items, setItems] = useState([])
    const [name , setName] = useState('')
    const [quantity , setQuantity] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        if(name && quantity){
            setItems([...items, {name, quantity}])
            setName('')
            setQuantity('')
        }
    }

  return (
    <div className='text-2xl font-medium'>
     <h1>Shopping List</h1>
     <form className='flex flex-col gap-4 py-3' onSubmit={handleClick}>
        <input type="text" placeholder="Enter Item Name" value={name} onChange={(e) => setName(e.target.value)} className='bg-gray-200 p-2 rounded-md' />
        <input type="number" placeholder="Enter Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className='bg-gray-200 p-2 rounded-md ' />
        <button type="submit" className='bg-gray-400 py-2 rounded-md'>Add Item</button>
     </form>
     <div>
            <h2>Items List</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - {item.quantity}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default ShoppingList
