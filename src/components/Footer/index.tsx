import { Container, ListContainer, LinkLogo } from './styles'

import Logo from '../../assets/images/logo.png'

import Instagram from '../../assets/images/icons/instagram.png'
import Facebook from '../../assets/images/icons/facebook.png'
import Twitter from '../../assets/images/icons/twitter.png'

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <LinkLogo to={'/'}>
          <img src={Logo} alt="Logo" />
        </LinkLogo>
        <ListContainer>
          <li>
            <a href="">
              <img src={Instagram} alt="icone instagram" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={Facebook} alt="icone Facebook" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={Twitter} alt="icone Twitter" />
            </a>
          </li>
        </ListContainer>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </div>
    </Container>
  )
}

export default Footer
