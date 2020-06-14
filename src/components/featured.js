import React from "react";
import styled from 'styled-components';
import FeaturedImg from './featured-image'
import { Link } from "gatsby";
import Button from "./button";

const FeaturedContainer = styled.div`
  max-width: var(--max-width-large);
  padding: var(--medium);
  margin: 0 auto;

  @media (min-width: 768px) { 
    display: grid;
    grid-template-columns: repeat(2, 38.5vw);
    grid-column-gap: var(--medium);
    justify-content: center;
    align-items: center;
  }

  svg {
    display: none;

    @media (min-width: 768px) { 
      display: block;
    }
  }
  
`
const FeaturedText = styled.div`
  color: white;
  self-align: center;

  h2 {
    color: var(--yellow);
    margin: var(--tiny) 0;
  }

  h5 {
    margin-top: var(--medium);
  }
`

const FeaturedDay = styled.h4`
  margin: var(--tiny) 0;
  display: inline-flex;
`

const Featured = ({node}) => {
  const date = new Date(node.date),
    dateOptions = { weekday: 'long', month: 'long', day: 'numeric'},
    localeDate = date.toLocaleDateString('BG', dateOptions);
  
  return (
    <FeaturedContainer key={node.id}>
      <FeaturedText>
        <FeaturedDay>{localeDate}</FeaturedDay> от <FeaturedDay>{date.getHours()}:{date.getMinutes()}</FeaturedDay>
        <h2>{node.title}</h2>
        <p>{node.description.description.slice(0, 200)}</p>
        <Link to={`/event/${node.slug}`}>
          <Button color="var(--dark-grey)" changedBgr="white" originBgr="var(--yellow)" cta="Виж повече" />
        </Link>
      </FeaturedText>
      <FeaturedImg />
    </FeaturedContainer>
  )
}

export default Featured
