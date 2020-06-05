import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const HeroContainer = styled.div`
  margin: 0 auto;
  padding: 0;
  display: grid;
  align-items: center;
  justify-content: center;
  height: 90vh;
`
const HeroAnimation = styled.div``

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-self: center;
  padding: var(--small);
  max-width: var(--max-width-mid);

  h1 {
    color: var(--red);
  }
`

const Buttons = styled.div`
  margin: var(--big) auto;
`

const ButtonLink = styled.a`
  padding: var(--small);
  outline: none;

  // extract this in a button comp
  text-transform: uppercase;
  font-size: calc(.7rem + .1vw);
  font-weight: 900;
  
  &:first-child {
    background: var(--dark-grey);
    color: white;
  }

  &:last-child {
    margin-left: var(--small);
    color: var(--red);
    border: 2px solid var(--red);
  }
`

const Hero = ({node}) => {
  return (
    <HeroContainer key={node.id}>
      <HeroAnimation />
      <HeroText>
        <h1>{node.title}</h1>
        <p>{node.description.description}</p>
        <Buttons>
          <ButtonLink to={node.linkForFirstButton}><h5>{node.cta1}</h5></ButtonLink>
          <ButtonLink to={node.linkForSecondButton}><h5>{node.cta2}</h5></ButtonLink>
        </Buttons>
      </HeroText>
    </HeroContainer>
  )
}

export default Hero
