// import { Link } from 'react-router-dom'

import { ContainerHeader, TextHeader } from './styles'

import logo from '../../assets/images/logo.png'

const HeaderComponent = () => {
  return (
    <ContainerHeader>
      <div className="container">
        <a href="#">
          <img src={logo} alt="logo efood" />
        </a>
        <TextHeader>
          Viva experiências gastronômicas no conforto da sua casa
        </TextHeader>
      </div>
    </ContainerHeader>
  )
}

export default HeaderComponent
