import React, { useContext } from 'react'
import IconAdd from '../assets/icons/bt_add_to_cart.svg'
import AppContext from '../Context/AppContext'

const Cards = ({ product }) => {
  // const [cart, setCart] = useState('')
  const { addToCart } = useContext(AppContext);

  const handleCart = (item) => {
    addToCart(item)
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
            <img src= {IconAdd} alt="asdf" onClick={() => handleCart(product)}/>
          </figure>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Cards