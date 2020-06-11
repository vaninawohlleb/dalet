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

const ButtonH5 = styled.h5`
  padding: var(--small);
  outline: none;

  // extract this in a button comp
  text-transform: uppercase;
  font-size: calc(.7rem + .1vw);
  font-weight: 900;
  
  &.consultations {
    background: var(--dark-grey);
    color: white;
  }

  &.events {
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
          <Link to="#consultations">
            <ButtonH5 className="consultations">{node.cta1}</ButtonH5>
          </Link>
          <Link to="#events">
            <ButtonH5 className="events">{node.cta2}</ButtonH5>
          </Link>
        </Buttons>
      </HeroText>
    </HeroContainer>
  )
}

export default Hero
