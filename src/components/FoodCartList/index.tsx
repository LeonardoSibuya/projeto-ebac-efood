import Cart from '../../models/Cart'

import FoodCartComponent from '../FoodCartComponent'

import { ContentContainer, ListContainer } from './styles'

type Props = {
  foodArray: Cart[]
}

const FoodList = ({ foodArray }: Props) => {
  return (
    <ContentContainer className="container">
      <ListContainer>
        {foodArray.map((foodCart) => (
          <FoodCartComponent
            key={foodCart.id}
            image={foodCart.image}
            title={foodCart.title}
            description={foodCart.description}
            id={foodCart.id}
          />
        ))}
      </ListContainer>
    </ContentContainer>
  )
}

export default FoodList
