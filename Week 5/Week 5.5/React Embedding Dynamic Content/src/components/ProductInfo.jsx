import React from 'react'

const ProductInfo = () => {

  let product = {
    name : "Asus ROG",
    price : 97000,
    availability : "In Stock"
  }  
    
  return (
    <div>
            <h2>Products</h2>   
            <ul>
                <li>{product.name}</li>
                <li>{product.price}</li>
                <li>{product.availability}</li>
            </ul>
    </div>
  )
}

export default ProductInfo
