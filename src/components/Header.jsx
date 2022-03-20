import React from 'react'
// import iconMenu from '../assets/icons/icon_menu.svg'
import logoYard from '../assets/logos/logo_yard_sale.svg';

const Header = () => {
  return (
 <header>
  <nav>
    <img src="" alt="menu" className="menu" />
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
        <li className="navbar-email">platzi@example.com</li>
        <li className="navbar-shopping-cart">
          <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />
          <div>2</div>
        </li>
      </ul>
    </div>
  </nav>
</header>

  )
}

export default Header