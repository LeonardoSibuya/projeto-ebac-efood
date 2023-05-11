import { BannerContainer, Content } from './styles'
import { FoodInfos } from '../../pages/Home'

type Props = {
  bannerFood: FoodInfos
}

const Banner = ({ bannerFood }: Props) => {
  return (
    <BannerContainer style={{ backgroundImage: `url(${bannerFood.capa})` }}>
      <Content className="container">
        <span>{bannerFood.tipo}</span>
        <h3>{bannerFood.titulo}</h3>
      </Content>
    </BannerContainer>
  )
}

export default Banner
