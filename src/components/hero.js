import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const HeroContainer = styled.div`
  margin: 0 auto;
  padding: 0;
  display: grid;
  align-items: center;
  justify-content: center;
  height: 80vh;
`
const HeroAnimation = styled.div``

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-self: center;
  padding: var(--small);
  max-width: var(--max-width-mid);
`

const Buttons = styled.div`
  margin: var(--big) auto;
`

const ButtonLink = styled.a`
  padding: var(--small);
  outline: none;
  border: 2px solid var(--black);
  font-family: var(--body-text);

  // extract this in a button comp
  text-transform: uppercase;
  font-size: calc(.7rem + .1vw);
  font-weight: 900;
  
  &:last-child {
    margin-left: var(--small);
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
          <ButtonLink to={node.linkForFirstButton}>{node.cta1}</ButtonLink>
          <ButtonLink to={node.linkForSecondButton}>{node.cta2}</ButtonLink>
        </Buttons>
      </HeroText>
    </HeroContainer>
  )
}

export default Hero
