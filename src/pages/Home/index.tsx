import HeaderComponent from '../../components/HeaderComponent'

import FoodList from '../../components/FoodList'
import Footer from '../../components/Footer'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: FoodItems } = useGetRestaurantsQuery()

  if (FoodItems) {
    return (
      <>
        <HeaderComponent />
        <FoodList foodArray={FoodItems} />
        <Footer />
      </>
    )
  }

  return <h4>carregando...</h4>
}

export default Home
