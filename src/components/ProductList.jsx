import React from 'react'
import Cards from '../components/Cards'
import useGetProducts from '../hooks/useGetProducts'

const ProductList = () => {
  
  const API = 'http://api.escuelajs.co/api/v1/products'
  const products = useGetProducts(API)
  return (
  <section className="main-container">
    <div className="cards-container">
      {products.map(product => (
        <Cards product = {product} key={product.id} />
      ))}
      
    </div>
  </section>
  )
}

export default ProductList