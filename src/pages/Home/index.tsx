import { useEffect, useState } from 'react'

import HeaderComponent from '../../components/HeaderComponent'

import FoodList from '../../components/FoodList'
import Footer from '../../components/Footer'

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
  const [FoodItems, setFoodItems] = useState<FoodInfos[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setFoodItems(res))
  }, [])

  return (
    <>
      <HeaderComponent />
      <FoodList foodArray={FoodItems} />
      <Footer />
    </>
  )
}

export default Home
