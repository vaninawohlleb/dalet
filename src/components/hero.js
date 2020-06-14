import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Button from "./button";

import SvgTopLeft from "./svg-top-left";
import SvgRight from "./svg-right";
import SvgTopRight from "./svg-top-right";

const HeroContainer = styled.div`
  margin: 0 auto;
  padding: 0;
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: var(--dark-grey);

  @media (min-width: 768px) {
    height: 82vh;
  }
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
    margin-top: 0;
  }
`

const Buttons = styled.div`
  margin: var(--big) auto;

  a {
    &:first-child {
      margin-right: var(--small);
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
        <div dangerouslySetInnerHTML={{ __html: node.description.childMarkdownRemark.html}} />
        <Buttons>
          <Link to="#consultations">
            <Button color="white" borderColor="var(--green)" changedBgr="var(--green)" originBgr="var(--dark-grey)" cta="Консултации" />
          </Link>
          <Link to="#events">
            <Button color="white" borderColor="var(--green)" changedBgr="var(--green)" originBgr="var(--dark-grey)" cta="Събития"/>
          </Link>
        </Buttons>
      </HeroText>
    </HeroContainer>
  )
}

export default Hero
