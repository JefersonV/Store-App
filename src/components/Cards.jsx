import React, { useState } from 'react'
import IconAdd from '../assets/icons/bt_add_to_cart.svg'

const Cards = ({ product }) => {
  const [cart, setCart] = useState('')
  
  const handleCart = () => {
    setCart('Change info')
  }

  return (
  <section className="main-container">
    <div className="cards-container">
      <div className="product-card">
        <img src={product.images[0]} alt={product.title} />
        <div className="product-info">
          <div>
            <p>${product.price}</p>
            <p>{product.title}</p>
          </div>
          <figure onClick={handleCart}>
            <img src= {IconAdd} alt />
          </figure>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Cards