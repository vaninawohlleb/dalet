import React from "react";
import styled from 'styled-components';
import { graphql, Link } from "gatsby";
import { slide as Menu } from 'react-burger-menu';

const NavigationContainer = styled.nav `
  padding: var(--medium);
  background: var(--dark-grey);
  margin: 0 auto;
  display: block;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 38vw 18vw 38vw;
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
    
    &.insta, 
    &.youtube {
      margin-right: 2px;

      img {
        width: 25px;
      }
    }

    &.facebook {
      margin-right: 2px;

      img {
        border-radius: 20%;
        width: 18px;
      }
    }
  }
`

const MobileMenu = styled.div`
  #react-burger-menu-btn {
    height: 10% !important;

    &:hover {
      opacity: 1;
    }

    &:focus {
      outline: none;
    }

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  .bm-burger-bars {
    height: 3px !important;
    width: 30px;
    background: var(--yellow);
    left: 85vw !important;
  
    @media screen and (min-width: 768px) {
      left: 100vw !important;
    }

    &:nth-of-type(1) {
      top: 5% !important;
    }

    &:nth-of-type(2) {
      top: 6% !important;
    }

    &:nth-of-type(3) {
      top: 7% !important;
    }
  }

  .bm-cross {
    background: var(--yellow);

    &:focus {
      outline: none;
      border: none;
    }
  }

  .bm-menu-wrap {
    top: 0;
    padding: var(--big);
    background: var(--dark-grey);

    li {
      padding: var(--tiny) 0;
      &:focus {
        outline: none;
        border: none;
      }
    }
  }
`

const Navigation = ({root, children}) => {
  // showSettings (e) {
  //   e.preventDefault();
  // }

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
        <li className="insta">
          <a href="https://www.instagram.com/daletcenter/" target="blank"><img src="/img/instagram.svg" /></a>
        </li>
        <li className="facebook">
          <a href="https://www.facebook.com/daletcenter" target="blank"><img src="/img/facebook.svg" /></a>
        </li>
        <li className="youtube">
          <a href="https://www.youtube.com/channel/UCoUOGLJzw0r09Z6EZpN-KfA?view_as=subscriber" target="blank"><img src="/img/youtube.svg" /></a>
        </li>
      </NavRight>
      <MobileMenu>
        <Menu noOverlay right >
          <li>
            <Link to="/events">Събития</Link>
          </li>
          <li>
            <Link to="/posts">Блог</Link>
          </li>
          <li>
            <Link to={`${root}#classes`}>Класове</Link>
          </li>
          <li>
            <Link to={`${root}#consultations`}>Консултации</Link>
          </li>
          <li>
            <Link to={`${root}#footer`}>Контакт</Link>
          </li>
        </Menu>
      </MobileMenu>
    </NavigationContainer>
  )
}

export default Navigation
