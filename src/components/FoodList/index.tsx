import FoodComponent from '../FoodComponent'

import { ContentContainer, ListContainer } from './styles'

type Props = {
  foodArray: FoodInfos[]
}

const FoodList = ({ foodArray }: Props) => {
  const getTags = (food: FoodInfos) => {
    const tags = []

    if (food.destacado) {
      tags.push('Destaque da semana')
    }

    if (food.tipo) {
      tags.push(food.tipo)
    }

    return tags
  }

  return (
    <ContentContainer className="container">
      <ListContainer>
        {foodArray.map((food) => (
          <li key={food.id}>
            <FoodComponent
              id={food.id}
              image={food.capa}
              tagInfos={getTags(food)}
              title={food.titulo}
              rating={food.avaliacao}
              description={food.descricao}
            />
          </li>
        ))}
      </ListContainer>
    </ContentContainer>
  )
}

export default FoodList
