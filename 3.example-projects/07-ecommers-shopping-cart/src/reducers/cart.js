export const cartInitialState = []

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  // Dependiendo de la acción hacemos un proecso u otro, por lo general se hace con un switch pero es cuestión de gustos
  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex !== -1) {
        const newState = [
          ...state.slice(0, productInCartIndex),
          { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
          ...state.slice(productInCartIndex + 1)
        ]
        return newState
      }

      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload
      return state.filter(item => item.id !== id)
    }

    case CART_ACTION_TYPES.CLEAR_CART: {
      return cartInitialState
    }
  }
}
