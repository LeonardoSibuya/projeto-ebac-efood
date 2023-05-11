import styled from 'styled-components'
import { colors } from '../../styles'

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
    background-color: rgba(0, 0, 0, 0.2);
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
  }

  p,
  span {
    font-size: 14px;
  }

  span {
    margin: 16px 0;
    display: block;
  }

  ${ButtonCart} {
    position: relative;
    margin: 0 auto;
  }
`
