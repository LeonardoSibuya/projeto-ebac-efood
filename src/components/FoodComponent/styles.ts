import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const FoodContainer = styled.div`
  border: 1px solid ${colors.darkPink};
  border-top: none;
  background-color: transparent;
  position: relative;
  max-width: 480px;
  width: 100%;

  > img {
    width: 100%;
    height: 240px;
    max-height: 100%;
  }

  ${TagContainer} {
    margin-left: 12px;
  }
`
export const TagContent = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const InfoContainer = styled.div`
  padding: 8px;

  p {
    line-height: 22px;
    margin-bottom: 32px;
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

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
export const ButtonLink = styled(Link)`
  background-color: ${colors.darkPink};
  color: ${colors.lightPink};
  font-weight: bold;
  cursor: pointer;
  padding: 4px 6px;

  position: absolute;
  bottom: 8px;
  left: 8px;
  text-decoration: none;
`
