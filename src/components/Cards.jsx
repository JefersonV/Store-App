import React, { useState } from 'react'
import IconAdd from '../assets/icons/bt_add_to_cart.svg'

const Cards = () => {
  const [cart, setCart] = useState('')
  
  const handleCart = () => {
    setCart('Change info')
  }

  return (
  <section className="main-container">
    <div className="cards-container">
      <div className="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt />
        <div className="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike {cart}</p>
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