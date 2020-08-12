import React from 'react'
import productData from '../../../mockups/data.json'

const ProductDetail = (props) => {
  const [product] = Object.values(productData).filter(ele => ele.id == props.match.params.id);
  return (
    <div>
      <h3>Product Details:</h3>
      <p>Name: {product.name}</p>
      <p>Id: {product.id}</p>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Desc: {product.desc}</p>
      <p>URL: {props.match.url}</p>
    </div>
  )
}

export default ProductDetail;