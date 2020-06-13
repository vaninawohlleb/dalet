import React from "react";
import styled from 'styled-components';
import { graphql, Link } from "gatsby";

const NavigationContainer = styled.nav `
  // max-width: var(--max-width-big);
  padding: var(--medium);
  display: grid;
  grid-template-columns: 40% 17% 40%;
  grid-column-gap: var(--medium);
  justify-items: center;
  align-items: center;
  background: var(--dark-grey);

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
  display: flex;

  li {
    margin: 0 var(--small);
  }
  
`

const NavRight = styled.ul`
  display: flex;

  li {
    margin: 0 var(--small);
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
          <Link to="/posts">Новини</Link>
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
      </NavRight>
        
    </NavigationContainer>
  )
}

export default Navigation
