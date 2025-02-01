import { createContext, useReducer } from 'react'
import { cartInitialState, CART_ACTION_TYPES, cartReducer } from '../reducers/cart'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({
    type: CART_ACTION_TYPES.ADD_TO_CART,
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: CART_ACTION_TYPES.REMOVE_FROM_CART,
    payload: product
  })

  const clearCart = () => dispatch({ type: CART_ACTION_TYPES.CLEAR_CART })

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
