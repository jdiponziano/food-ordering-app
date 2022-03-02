import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import MealsListing from './components/Meals/MealsListing/MealsListing'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <MealsListing />
      </main>
    </>
  )
}

export default App
