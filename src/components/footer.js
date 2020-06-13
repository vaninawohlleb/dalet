import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby";

const FooterContainer = styled.div`
  background: var(--dark-grey);
  padding: var(--big);
  display: grid;
  grid-template-columns: 40% 40% 20%;
  color: white;
  border-top: 2px solid var(--yellow);

  a {
    text-align: right;
  }

  img {
    max-width: 20%;
  }
`
const Footer = ({ root }) => {
  return (
      <FooterContainer id="footer">
        <p>Vanina Tsoneva / 2020</p>
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
