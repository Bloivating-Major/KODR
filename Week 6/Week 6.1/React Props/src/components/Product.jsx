import React from 'react'

const Product = ({name , price}) => {
  return (
    <div>
       <h2>Product Name is : {name}</h2>
       <p>Product Price is :  ${price}</p>
    </div>
  )
}

export default Product
