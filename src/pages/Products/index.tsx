import Banner from '../../components/Banner'
import FoodCartList from '../../components/FoodCartList'
import Footer from '../../components/Footer'
import HeaderPageProduct from '../../components/HeaderPageProduct'

import Cart from '../../models/Cart'

import Sushi from '../../assets/images/pratos/sushi.png'
import Pizza from '../../assets/images/pratos/pizza.png'
import Massa from '../../assets/images/pratos/macarrao.png'

const CartFood: Cart[] = [
  {
    id: 1,
    image: `${Sushi}`,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    image: `${Pizza}`,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    image: `${Pizza}`,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    image: `${Massa}`,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    image: `${Massa}`,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    image: `${Sushi}`,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Products = () => {
  return (
    <>
      <HeaderPageProduct />
      <Banner />
      <FoodCartList foodArray={CartFood} />
      <Footer />
    </>
  )
}

export default Products
