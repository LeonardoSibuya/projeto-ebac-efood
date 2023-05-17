import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

//Button Style
export const ButtonCart = styled.button`
  padding: 4px;
  font-weight: bold;
  color: ${colors.darkPink};
  background-color: ${colors.lightPink};
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0px;
  max-width: 90%;
  margin: 16px;
`

//FoodComponent Style
export const FoodContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 40px;
  row-gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  li {
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
  }
`

export const InfoContainer = styled.div`
  padding: 8px;

  p {
    line-height: 22px;
    margin-bottom: 40px;
  }

  ${ButtonCart} {
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

//Modal Style
export const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
  }
`

export const ImgBotaoFechar = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`

export const ModalContainer = styled.div`
  z-index: 1;
  width: 1024px;
  padding: 32px;
  background-color: ${colors.darkPink};
  display: flex;
  color: ${colors.white};
  gap: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }

  > div {
    img {
      width: 240px;
      height: 240px;
    }
  }
`
export const Content = styled.div`
  h2 {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 900;

    @media (max-width: ${breakpoints.tablet}) {
      text-align: center;
      font-size: 16px;
    }
  }

  p,
  span {
    font-size: 14px;

    @media (max-width: ${breakpoints.tablet}) {
      text-align: center;
    }
  }

  span {
    margin: 16px 0;
    display: block;
  }

  ${ButtonCart} {
    position: relative;
    margin: 0 auto;

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 100%;
      width: 100%;
    }
  }
`
