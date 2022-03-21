import { useEffect, useState } from 'react'

const useGetProducts = (API) => {
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

  return products;
}

export default useGetProducts