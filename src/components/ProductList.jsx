import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
const ProductList = () => {
  
  const API = 'http://api.escuelajs.co/api/v1/products'
  const [products, setProducts] = useState([])
  useEffect(async () => {
    const controller = new AbortController();
    try {
      const response = await fetch(API)
      const data = await response.json()
      setProducts(data)
    }catch (err) {
      console.log('error: '+ err)
    }
  return () => controller.abort()
  }, [])

  return (
  <section className="main-container">
    <div className="cards-container">
      {products.map(product => (
        <Cards />
      ))}
      
    </div>
  </section>
  )
}

export default ProductList