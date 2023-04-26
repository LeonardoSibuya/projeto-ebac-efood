import styled from 'styled-components'
import { colors } from '../../styles'
import { Button } from '../ButtonAddCart/styles'

export const FoodContainer = styled.div`
  background-color: ${colors.darkPink};
  color: ${colors.lightPink};
  position: relative;
  width: 320px;

  > img {
    width: 100%;
    height: 160px;
    max-height: 100%;
    padding: 8px;
  }
`

export const InfoContainer = styled.div`
  padding: 8px;

  p {
    line-height: 22px;
    margin-bottom: 32px;
  }

  ${Button} {
    display: inline-block;
    width: 100%;
    text-align: center;
    text-decoration: none;
  }
`
export const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 18px;
`
