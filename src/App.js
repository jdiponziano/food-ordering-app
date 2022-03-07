import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import MealsListing from './components/Meals/MealsListing/MealsListing'
import { ModalPortal } from './components/UI/Modal/Modal'

const App = () => {
  return (
    <>
      <div className='page-wrapper'>
        <Header />
        <main>
          <Intro />
          <MealsListing />
        </main>
      </div>
      <ModalPortal />
    </>
  )
}

export default App
