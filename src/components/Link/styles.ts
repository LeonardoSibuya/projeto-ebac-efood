import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const ButtonLink = styled(Link)`
  background-color: ${colors.darkPink};
  color: ${colors.lightPink};
  font-weight: bold;
  cursor: pointer;
  padding: 4px 6px;
`
