import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import HeaderPageProduct from '../../components/HeaderPageProduct'

import FoodCartComponent from '../../components/FoodCartComponent'

import { FoodInfos } from '../Home'

const Products = () => {
  const { id } = useParams()
  const [menus, setMenus] = useState<FoodInfos>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setMenus(res))
  }, [id])

  if (!menus) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderPageProduct />
      <Banner
        bannerFood={{
          id: menus.id,
          titulo: menus.titulo,
          destacado: menus.destacado,
          capa: menus.capa,
          tipo: menus.tipo,
          avaliacao: menus.avaliacao,
          descricao: menus.descricao,
          cardapio: []
        }}
      />
      <FoodCartComponent items={menus.cardapio} />
      <Footer />
    </>
  )
}

export default Products
