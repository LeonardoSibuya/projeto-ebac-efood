import Tag from '../Tag'

import {
  FoodContainer,
  TagContent,
  InfoContainer,
  TitleContent,
  RatingContainer,
  ButtonLink
} from './styles'

import iconStar from '../../assets/images/icons/star.png'

type Props = {
  image: string
  tagInfos: string[]
  title: string
  rating: number
  description: string
  id: number
}

const FoodComponent = ({
  image,
  title,
  rating,
  description,
  id,
  tagInfos
}: Props) => {
  const getDescription = (descricao: string) => {
    if (descricao.length > 160) {
      return descricao.slice(0, 157) + '...'
    }
    return descricao
  }

  return (
    <FoodContainer>
      <img src={image} />
      <TagContent>
        {tagInfos.map((t) => (
          <Tag key={id}>{t}</Tag>
        ))}
      </TagContent>
      <InfoContainer>
        <TitleContent>
          <h3>{title}</h3>
          <RatingContainer>
            <h4>{rating}</h4>
            <img src={iconStar} alt="imagem estrela" />
          </RatingContainer>
        </TitleContent>
        <p>{getDescription(description)}</p>
        <ButtonLink to={`/products/${id}`}>Saiba Mais</ButtonLink>
      </InfoContainer>
    </FoodContainer>
  )
}

export default FoodComponent
