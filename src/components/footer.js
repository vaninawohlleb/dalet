import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby";

const FooterContainer = styled.div`
  background: var(--dark-grey);
  padding: var(--big);

  border-top: 2px solid var(--yellow);
  color: white;

  @media (min-width: 768px) { 
    display: grid;
    grid-template-columns: 35vw 35vw 20vw;
  }

  a {
    @media (min-width: 768px) { 
      display: flex;
      justify-content: flex-end;
    }    
  }

  img {
    max-width: 30%;
    
    @media (min-width: 768px) { 
      display: flex;
      align-self: self-end;
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

        <div>
          <p>Банковите ни детйли са:</p>
          <p>ЕЗОТЕРИЧЕН ЦЕНТЪР ДАЛЕТ ЕООД</p>
          <p>Сметка в ПИБ: BG53FINV91501017309661</p>
          <p>Банков код: FINVBGSF</p>
          <p>Основание за плащане: такса обучение</p>
        </div>
        
        <Link to={root}>
          <img src="/img/dalet-logo.png" alt="logo"/>
        </Link>
      </FooterContainer> 
  )
}

export default Footer
