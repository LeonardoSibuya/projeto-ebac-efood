import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

import lixeira from '../../assets/images/icons/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const SideBar = styled.aside`
  background-color: ${colors.darkPink};
  padding: 32px 8px 0;
  max-width: 360px;
  width: 100%;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 300px;
  }
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.lightPink};
  position: relative;
  padding: 8px;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }

  h3 {
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
  }
`

export const PriceContainer = styled.div`
  margin: 40px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colors.lightPink};
  font-weight: bold;
  font-size: 14px;
`

export const Button = styled.button`
  padding: 4px;
  font-weight: bold;
  color: ${colors.darkPink};
  background-color: ${colors.lightPink};
  border: none;
  cursor: pointer;
  width: 100%;
`
