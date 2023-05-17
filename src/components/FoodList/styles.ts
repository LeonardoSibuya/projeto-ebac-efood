import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ContentContainer = styled.div`
  margin: 0 auto;
`

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
