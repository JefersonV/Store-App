import { useState } from 'react'

const initialState = {
  cart: [],
}

const useInitialState = () => {
  const [state,setState] = useState(initialState)

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state, payload]
    });
  };

  return {
    state,
    addToCart
  }
}

export default useInitialState