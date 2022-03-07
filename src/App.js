import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import MealsListing from './components/Meals/MealsListing/MealsListing'
import { ModalPortal } from './components/UI/Modal/Modal'
import { CartProvider } from './store/CartProvider'

const App = () => {
  return (
    <CartProvider>
      <div className='page-wrapper'>
        <Header />
        <main>
          <Intro />
          <MealsListing />
        </main>
      </div>
      <ModalPortal />
    </CartProvider>
  )
}

export default App
