import { Container, Content, LinkLogo, LinkHeader } from './styles'

import Logo from '../../assets/images/logo.png'

const HeaderPageProduct = () => {
  return (
    <Container>
      <Content className="container">
        <LinkHeader href="#">Restaurantes</LinkHeader>
        <LinkLogo to={'/'}>
          <img src={Logo} alt="Logo" />
        </LinkLogo>
        <span>0 produto(s) no carrinho</span>
      </Content>
    </Container>
  )
}

export default HeaderPageProduct
