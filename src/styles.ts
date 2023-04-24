import { createGlobalStyle } from 'styled-components'

export const colors = {
  darkPink: '#e66767',
  lightPink: '#ffebd9',
  backgroundPink: '#fff8f2',
  white: '#fff'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.backgroundPink};
    color: ${colors.darkPink};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
