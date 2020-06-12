import React from "react";
import styled from 'styled-components';
import FeaturedImg from './featured-image'
import {Link } from "gatsby";

const FeaturedContainer = styled.div`
  max-width: var(--max-width-large);
  padding: var(--medium);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 38.5vw);
  grid-column-gap: var(--medium);
  justify-content: center;
  align-items: center;
`
// extract this as a button
const ButtonH5 = styled.h5`
  padding: var(--small);
  outline: none;
  margin: var(--medium) 0;
  color: var(--dark-grey);

  background: linear-gradient(to right, var(--yellow), var(--yellow) 50%, white 50%);
  background-clip: text;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;

  &:hover {
    background-position: 0 100%;
  }
`

const FeaturedText = styled.div`
  color: white;
  self-align: center;

  h2 {
    color: var(--yellow);
    margin: var(--tiny) 0;
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
        <FeaturedDay>{localeDate}</FeaturedDay> от <FeaturedDay>{date.getHours()}:{date.getMinutes()}0</FeaturedDay>
        <h2>{node.title}</h2>
        <p>{node.description.description.slice(0, 200)}</p>
        <Link to={`/event/${node.slug}`}>
          <ButtonH5>Виж повече</ButtonH5>
        </Link>
      </FeaturedText>
      <FeaturedImg />
    </FeaturedContainer>
  )
}

export default Featured
