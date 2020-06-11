import React from "react";
import styled from 'styled-components';
import { graphql, Link } from "gatsby";

const NavigationContainer = styled.nav `
  // max-width: var(--max-width-big);
  padding: var(--medium);
  display: grid;
  grid-template-columns: 20% 50%;
  grid-column-gap: var(--huge);
  justify-content: space-between;
`

const Logo = styled.div`
  a {
    color: var(--black);
    font-family: var(--heading-text);
    text-transform: uppercase;
    font-weight: 800;
  }
`

const Nav = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-items: self-end;
  
  a {
    color: var(--black);
    font-family: var(--body-text);
    text-transform: uppercase;
    font-size: .9rem;

    &:visited {
      color: var(--black)
    }
  }
`


const Navigation = ({location, children}) => {
  console.log(children)
  return (
    <NavigationContainer>
      <Logo>
        <Link to="/">Далет</Link>
      </Logo>
      <Nav>
        <li>
          <Link to="/events">Събития</Link>
        </li>
        <li>
          <Link to="/posts">Новини</Link>
        </li>
        <li>
          <Link to="#classes">Класове</Link>
        </li>
        <li>
          <Link to="#consultations">Консултации</Link>
        </li>
        <li>
          <Link to="/events">Контакт</Link>
        </li>
      </Nav>
    </NavigationContainer>
  )
}

export default Navigation
