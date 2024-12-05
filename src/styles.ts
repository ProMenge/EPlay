import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#eee',
  black: '#111',
  gray: '#333',
  lightGray: '#A3A3A3',
  green: '#10AC84',
  darkPurple: '#8E44AD', //Fight
  red: '#FF3B3B', // SWITCH
  blue: '#003791', // PS5
  darkGray: '#4D4D4D', // Windows
  orange: '#FF7F0E', // Sports
  purple: '#8B008B', // Adventure
  teal: '#008080', // FPS
  darkGreen: '#006400', // RPG
  yellow: '#FFD700', // Ação
  lightBlue: '#1E90FF' // Fallback/other
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
  body {
    background-color: ${colors.black};
    color: ${colors.white};
    padding-top: 40px;
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
