import React from "react"
import styled,  { createGlobalStyle }  from 'styled-components';
import Navigation from "../components/navigation";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Montserrat";
    src: url("/fonts/Montserrat/Montserrat-Black.ttf");
    font-weight: 900;
  }

  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto/Roboto-Regular.ttf");
    font-weight: 400;
  }

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

    --max-width-large: 90rem;
    --max-width-big: 61.50rem;
    --max-width-mid: 50rem;
    --max-width-small: 15rem;
    --max-width-tiny: 12rem;

    --red: #D65556;
    --yellow: #F4C578;
    --dark-grey: #403F4C;
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
    cursor: pointer;
  }

  h1, h2, h3, h4, .uppercase {
    font-family: var(--heading-text);
    font-weight: 800;
  }

  h1 {
    font-size: calc(2.4rem + .1vw);
    line-height: calc(3rem + .2vw);
  }

  h1, h2, .uppercase {
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

  h5 {
    font-family: var(--body-text);
    font-size: .8rem;
    text-transform: uppercase;
    font-weight: 800;
    display: inline-flex;
    margin: 0;
    letter-spacing: .6px;
  }

  p {
    margin: .2rem 0;
  }

  .dotted {
    &:last-of-type {
      &:before {
        content: "•";
        padding: 10px;
      }

      &:after {
        content: "•";
        padding: 10px;
      }
    }

    &.middle {
      &:before {
        content: "•";
        padding: 10px;
      }
    }    
  }
`

const Wrapper = styled.main `
  display: block;
  position: relative;
  margin: 0 auto;
  background: url("/img/natal-card-1.svg") no-repeat;
  background-size: 113%;
  background-position: 21% -11%;
`


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div>
      <GlobalStyle />
      <header>
        <Navigation location={location} children={children}/>
      </header>
      <Wrapper>{children}</Wrapper>
      <footer></footer>
    </div>
  )
}

export default Layout
