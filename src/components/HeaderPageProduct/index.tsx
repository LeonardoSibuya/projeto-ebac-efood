import { Container, Content, LinkLogo } from './styles'

import Logo from '../../assets/images/logo.png'

const HeaderPageProduct = () => {
  return (
    <Container>
      <Content className="container">
        <a href="#">Restaurantes</a>
        <LinkLogo to={'/'}>
          <img src={Logo} alt="Logo" />
        </LinkLogo>
        <a href="#">0 produto(s) no carrinho</a>
      </Content>
    </Container>
  )
}

export default HeaderPageProduct
