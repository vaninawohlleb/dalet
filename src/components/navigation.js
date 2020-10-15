import React from "react";
import styled from 'styled-components';
import { graphql, Link } from "gatsby";

const NavigationContainer = styled.nav `
  padding: var(--medium);
  background: var(--dark-grey);
  margin: 0 auto;
  display: block;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 22% 17% 22%;
    grid-column-gap: var(--tiny);
    justify-items: center;
    align-items: center;
    justify-content: center;
  }

  a {
    color: white;
    font-family: var(--heading-text);
    text-transform: uppercase;
    font-weight: 800;
    font-size: .9rem;

    &:visited {
      color: white;
    }
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;

  a {
    text-align: center;

    img {
      max-width: 30%;
    }
  }
`

const NavLeft = styled.ul`
  display: none;

  @media only screen and (min-width: 375px) {
    
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 1024px) {

  }

  li {
    margin: 0 var(--small);
  }
  
`

const NavRight = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }

  li {
    margin: 0 var(--small);
    display: flex;
    align-items: center;
    
    &:first-child {
      img {
        width: 25px;
      }
    }

    &:last-child {
      img {
        border-radius: 20%;
        width: 18px;
      }
    }
  }
`


const Navigation = ({root, children}) => {

  return (
    <NavigationContainer>
      <NavLeft>
        <li>
          <Link to="/events">Събития</Link>
        </li>
        <li>
          <Link to={`${root}#posts`}>Блог</Link>
        </li>
        <li>
          <Link to={`${root}#classes`}>Класове</Link>
        </li>
      </NavLeft>
      <Logo>
        <Link to={root}>
          <img src="/img/dalet-logo.png" alt="logo"/>
        </Link>
      </Logo>
      <NavRight>
        <li>
          <Link to={`${root}#consultations`}>Консултации</Link>
        </li>
        <li>
          <Link to={`${root}#footer`}>Контакт</Link>
        </li>
        <li>
          <a href="https://www.instagram.com/daletcenter/" target="blank"><img src="/img/instagram.svg" /></a>
        </li>
        <li>
          <a href="https://www.facebook.com/daletcenter" target="blank"><img src="/img/facebook.svg" /></a>
        </li>
      </NavRight>
        
    </NavigationContainer>
  )
}

export default Navigation
