import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const BannerContainer = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  margin-bottom: 56px;
  width: 100%;
  height: 280px;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  row-gap: 160px;
  padding: 24px 0;
  color: ${colors.white};
  font-size: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }

  span {
    font-weight: 100;
    z-index: 1;
  }

  h3 {
    font-weight: 900;
    z-index: 1;
  }
`
