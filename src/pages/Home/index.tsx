import HeaderComponent from '../../components/HeaderComponent'

import FoodList from '../../components/FoodList'
import Footer from '../../components/Footer'

import { useGetRestaurantsQuery } from '../../services/api'

export interface CardapioItem {
  id: number
  foto: string
  nome: string
  descricao: string
  preco: number
  porcao: string
}

export type FoodInfos = {
  id: number
  titulo: string
  destacado: boolean
  capa: string
  tipo: string
  avaliacao: number
  descricao: string
  cardapio: CardapioItem[]
}

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
