import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import SvgTopLeft from "./svg-top-left";
import SvgRight from "./svg-right";
import SvgTopRight from "./svg-top-right";

const HeroContainer = styled.div`
  margin: 0 auto;
  padding: 0;
  display: grid;
  align-items: center;
  justify-content: center;
  height: 82vh;
  background: var(--dark-grey);
`

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-self: center;
  padding: var(--small);
  max-width: var(--max-width-mid);
  color: white;

  h1 {
    color: var(--yellow);
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
    color: white;
    border: 2px solid var(--green);

    background: linear-gradient(to right, var(--dark-grey), var(--dark-grey) 50%, var(--green) 50%);
    background-clip: text;
    background-size: 202% 100%;
    background-position: 100%;
    transition: background-position 275ms ease;

    &:hover {
      background-position: 0 100%;
    }
  }

  &.events {
    margin-left: var(--small);
    color: white;
    border: 2px solid var(--green);

    background: linear-gradient(to right, var(--green), var(--green) 50%, var(--dark-grey) 50%);
    background-clip: text;
    background-size: 200% 100%;
    background-position: 100.2%;
    transition: background-position 275ms ease;

    &:hover {
      background-position: 0 100%;
    }
  }
`

const Hero = ({node}) => {
  return (
    <HeroContainer key={node.id}>
      <SvgTopLeft />
      <SvgTopRight />
      <SvgRight />
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
