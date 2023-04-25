import HeaderComponent from '../../components/HeaderComponent'

import Food from '../../models/Food'

import Sushi from '../../assets/images/pratos/sushi.png'
import Pizza from '../../assets/images/pratos/pizza.png'
import Massa from '../../assets/images/pratos/macarrao.png'

import FoodList from '../../components/FoodList'
import Footer from '../../components/Footer'

const foods: Food[] = [
  {
    id: 1,
    image: `${Sushi}`,
    tagInfos: ['destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    image: `${Pizza}`,
    tagInfos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rating: 4.2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    image: `${Massa}`,
    tagInfos: ['Italiana'],
    title: 'Pizza Marguerita',
    rating: 4.6,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    image: `${Massa}`,
    tagInfos: ['Italiana'],
    title: 'Hioki Sushi',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 5,
    image: `${Massa}`,
    tagInfos: ['Italiana'],
    title: 'Hioki Sushi',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 6,
    image: `${Massa}`,
    tagInfos: ['Italiana'],
    title: 'Hioki Sushi',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => {
  return (
    <>
      <HeaderComponent />
      <FoodList foodArray={foods} />
      <Footer />
    </>
  )
}

export default Home
