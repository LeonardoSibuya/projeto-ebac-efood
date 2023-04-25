import { Link } from 'react-router-dom'

import styled from 'styled-components'

import bgImage from '../../assets/images/bg-header.png'
import { colors } from '../../styles'

export const Container = styled.div`
  background-image: url(${bgImage});
  padding: 40px;
  text-align: center;
`
export const Content = styled.div`
  font-weight: 900;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  a {
    width: 100%;
    text-decoration: none;
    color: ${colors.darkPink};
  }
`

export const LinkLogo = styled(Link)`
  text-decoration: none;
`
