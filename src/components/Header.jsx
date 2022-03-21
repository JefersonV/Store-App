import React, { useState } from 'react'
import iconMenu from '../assets/icons/icon_menu.svg'
import logoYard from '../assets/logos/logo_yard_sale.svg'
import iconShop from '../assets/icons/icon_shopping_cart.svg'
import OrderActions from './OrderActions'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
 <header>
  <nav>
    <img src={iconMenu} alt="menu" className="menu" />
    <div className="navbar-left">
      <img src={logoYard} alt="logo" className="nav-logo" />
      <ul>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Others</a>
        </li>
      </ul>
    </div>
    <div className="navbar-right">
      <ul>
        <li onClick={handleToggle} className="navbar-email">platzi@example.com</li>
        { toggle ?
          <OrderActions />
        :
          null
        }
        <li className="navbar-shopping-cart">
          <img src={iconShop} alt="shopping cart" />
          <div>2</div>
        </li>
      </ul>
    </div>
  </nav>
</header>

  )
}

export default Header