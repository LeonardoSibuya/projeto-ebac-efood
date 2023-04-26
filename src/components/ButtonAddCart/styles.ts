import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { colors } from '../../styles'

export const Button = styled(Link)`
  padding: 4px 0;
  font-weight: bold;
  color: ${colors.darkPink};
  background-color: ${colors.lightPink};
`
