import React from 'react'

const ProductList = () => {
  const products = [
    {id : 1, name : "Laptop", price : 200},
    {id : 2, name : "Mobile", price : 100},
    {id : 3, name : "Watch", price : 50},
  ]
  return (
    <div>
    <h1>Products</h1>
      {products.map( ({id, name, price}) => (
        <ul key={id}>
            <li>Product Id : {id}</li>
            <li>Product Name : {name}</li>
            <li>Product Price : {price}</li>
        </ul>
      ) )}
    </div>
  )
}

export default ProductList
