import React from 'react'

const CartProduct = () => {
  return (
  <aside classname="product-detail">
    <div classname="title-container">
      <img src="./icons/flechita.svg" alt="arrow" />
      <p classname="title">My order</p>
    </div>
    <div classname="my-order-content">
      <div classname="shopping-cart">
        <figure>
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
        <img src="./icons/icon_close.png" alt="close" />
      </div>
      <div classname="shopping-cart">
        <figure>
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
        <img src="./icons/icon_close.png" alt="close" />
      </div>
      <div classname="shopping-cart">
        <figure>
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
        <img src="./icons/icon_close.png" alt="close" />
      </div>
      <div classname="order">
        <p>
          <span>Total</span>
        </p>
        <p>$560.00</p>
      </div>
      <button classname="primary-button">
        Checkout
      </button>
    </div>
  </aside>


  )
}

export default CartProduct