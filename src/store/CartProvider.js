import { CartContext } from './cart-context'

export const CartProvider = ({ children }) => {
  const addCartItemHandler = item => {}

  const removeCartItemHandler = id => {}

  const initialValues = {
    items: [
      {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
        amount: 3,
      },
      {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
        amount: 1,
      },
      {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
        amount: 2,
      },
      {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
        amount: 1,
      }
    ],
    totalAmout: 0,
    additem: addCartItemHandler,
    removeItem: removeCartItemHandler
  }

  return (
    <CartContext.Provider value={initialValues}>
      {children}
    </CartContext.Provider>
  )
}
