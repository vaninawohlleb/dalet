import React from "react"
import { Link } from "gatsby";
import styled,  { createGlobalStyle }  from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Roboto&display=swap');

  :root {
    --tiny: .5rem;
    --small: 1rem;
    --medium: 1.5rem;
    --big: 2rem;
    --large: 2.5rem;
    --huge: 4.5rem;
    --xxl: 5rem;
    --hugest: 8rem;
    --max: 10rem;

    --max-width-large: 73rem;
    --max-width-big: 61.50rem;
    --max-width-mid: 50rem;
    --max-width-small: 15rem;
    --max-width-tiny: 12rem;

    --red: #D65556;
    --yellow: #F4C578;
    --green: #197278;
    --black: #2A2C24;
    --grey: #F9F9F9;

    --heading-text: 'Montserrat', sans-serif;
    --body-text: 'Roboto', sans-serif;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  html {
    font-size: 100%;
    // font-weight: 400;
    scroll-behavior: smooth;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: var(--body-text);
    color: var(--black);
    margin: 0;
    padding: 0;
    background: #fff;
    overflow-x: hidden;
  }

  ul, ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a {
    all: initial;
  }

  h1, h2, h3, h4, .uppercase {
    font-family: var(--heading-text);
    font-weight: 800;
  }

  h1 {
    font-size: calc(2.4rem + .1vw);
    line-height: calc(3rem + .2vw);
  }

  h1, .uppercase {
    text-transform: uppercase;
  }

  h2 {
    font-size: calc(1.8rem + .1vw);
  }

  h3 {
    font-size: calc(1.3rem + .1vw);
    margin: var(--tiny) 0;
  }

  h4, .uppercase {
    font-size: calc(1rem + .1vw);
  }

  p {
    margin: .2rem 0;
  }
`;

const Wrapper = styled.main`
  display: block;
  position: relative;
  margin: 0 auto;
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div>
      <header></header>
      <GlobalStyle />
      <Wrapper>{children}</Wrapper>
      <footer>
      </footer>
    </div>
  )
}

export default Layout
