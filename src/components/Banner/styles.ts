import styled from 'styled-components'

import BannerImage from '../../assets/images/bg-dark.png'
import { colors } from '../../styles'

export const BannerContainer = styled.div`
  background-image: url(${BannerImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 56px;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  row-gap: 160px;
  padding: 24px 0;
  color: ${colors.white};
  font-size: 32px;

  span {
    font-weight: 100;
  }

  h3 {
    font-weight: 900;
  }
`
