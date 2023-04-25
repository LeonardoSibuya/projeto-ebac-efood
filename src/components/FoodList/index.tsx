import Food from '../../models/Food'
import FoodComponent from '../FoodComponent'

import { ContentContainer, ListContainer } from './styles'

type Props = {
  foodArray: Food[]
}

const FoodList = ({ foodArray }: Props) => {
  return (
    <ContentContainer className="container">
      <ListContainer>
        {foodArray.map((food) => (
          <FoodComponent
            key={food.id}
            image={food.image}
            tagInfos={food.tagInfos}
            title={food.title}
            rating={food.rating}
            description={food.description}
            id={food.id}
          />
        ))}
      </ListContainer>
    </ContentContainer>
  )
}

export default FoodList
