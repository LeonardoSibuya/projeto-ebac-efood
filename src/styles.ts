import { createGlobalStyle } from 'styled-components'

export const colors = {
  darkPink: '#e66767',
  lightPink: '#ffebd9',
  backgroundPink: '#fff8f2',
  white: '#fff'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${colors.backgroundPink};
    color: ${colors.darkPink};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`
