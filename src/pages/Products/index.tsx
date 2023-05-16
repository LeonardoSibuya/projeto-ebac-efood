import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import HeaderPageProduct from '../../components/HeaderPageProduct'

import FoodCartComponent from '../../components/FoodCartComponent'

import { useGetRestaurantsIdQuery } from '../../services/api'

import { FoodInfos } from '../Home'
import Cart from '../../components/Cart'

const Products = () => {
  const { id } = useParams()

  const { data: menu } = useGetRestaurantsIdQuery(id!)

  if (!menu) {
    return <h4>carregando...</h4>
  }

  return (
    <>
      <HeaderPageProduct />
      <Banner
        bannerFood={{
          id: menu.id,
          titulo: menu.titulo,
          destacado: menu.destacado,
          capa: menu.capa,
          tipo: menu.tipo,
          avaliacao: menu.avaliacao,
          descricao: menu.descricao,
          cardapio: []
        }}
      />
      <FoodCartComponent items={menu.cardapio} />
      <Footer />
      <Cart />
    </>
  )
}

export default Products
