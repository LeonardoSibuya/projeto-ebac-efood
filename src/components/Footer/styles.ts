import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  background-color: ${colors.lightPink};
  padding: 40px;
  text-align: center;
  margin-top: 120px;

  p {
    width: 800px;
    margin: 0 auto;
  }
`
export const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 32px 0 80px;

  a {
    text-decoration: none;
  }
`

export const LinkLogo = styled(Link)`
  text-decoration: none;
`
