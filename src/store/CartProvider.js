import { useReducer } from 'react'
import { CartContext } from './cart-context'

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const { item } = action
    const updatedItems = state.items.concat(item)
    const updatedTotalAmount = state.totalAmout + item.price * item.amount

    return {
      items: updatedItems,
      totalAmout: updatedTotalAmount
    }
  }

  if (action.type === 'REMOVE_ITEM') {
  }
  
  return defaultCartState
}

export const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  )

  const addItemToCartHandler = item => {
    dispatchCartAction({ type: 'ADD_ITEM', item: item })
  }

  const removeItemFromCartHandler = id => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id: id })
  }

  const initialValues = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }

  return (
    <CartContext.Provider value={initialValues}>
      {children}
    </CartContext.Provider>
  )
}
