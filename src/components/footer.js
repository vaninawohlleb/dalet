import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby";

const FooterContainer = styled.div`
  background: var(--dark-grey);
  padding: var(--big);
  display: grid;
  grid-template-columns: 70vw 20vw;
  border-top: 2px solid var(--yellow);
  color: white;

  a {
    display: flex;
    justify-content: flex-end;
  }

  img {
    max-width: 80%;
    display: flex;
    align-self: self-end;

    @media (min-width: 768px) { 
      max-width: 30%;
    }
  }
`
const Footer = ({ root }) => {
  return (
      <FooterContainer id="footer">
        <div>
          <p>089 493 4423</p>
          <p>daletcenter@gmail.com</p>
          <p>ул. "Чарлз Дарвин" 10</p>
          <p>София 1113</p>
        </div>
        <Link to={root}>
          <img src="/img/dalet-logo.png" alt="logo"/>
        </Link>
      </FooterContainer> 
  )
}

export default Footer
