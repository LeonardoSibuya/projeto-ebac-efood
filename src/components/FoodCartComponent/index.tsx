import ButtonAddCart from '../ButtonAddCart'

import { FoodContainer, InfoContainer, TitleContent } from './styles'

type Props = {
  image: string
  title: string
  description: string
  id: number
}

const FoodCartComponent = ({ image, title, description, id }: Props) => {
  return (
    <FoodContainer key={id}>
      <img src={image} />
      <InfoContainer>
        <TitleContent>
          <h3>{title}</h3>
        </TitleContent>
        <p>{description}</p>
        <ButtonAddCart>Adicionar ao carrinho</ButtonAddCart>
      </InfoContainer>
    </FoodContainer>
  )
}

export default FoodCartComponent
