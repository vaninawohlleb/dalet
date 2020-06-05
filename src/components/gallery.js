import React from "react";
import styled from 'styled-components';
import Img from 'gatsby-image';

const GalleryContainer = styled.div`
  // max-width: var(--max-width-large);
  // padding: var(--big);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 50vw);
  justify-content: center;
`
// extract this as a button
const ButtonLink = styled.button`
  padding: var(--small);
  outline: none;
  border: 2px solid var(--black);
  font-family: var(--heading-text);
  text-transform: uppercase;
  font-size: calc(.7rem + .1vw);
  font-weight: 900;
  margin: var(--medium) 0;

`

const GalleryText = styled.div`
  padding: var(--huge);
`

const Gallery = ({node}) => {
  return (
    <GalleryContainer key={node.id}>
      <GalleryText>
        <h2>{node.title}</h2>
        <p>{node.description.description}</p>
        <ButtonLink>Направете запитване</ButtonLink>
      </GalleryText>
      <Img fluid={node.images[0].fluid}></Img>
      <Img fluid={node.images[1].fluid}></Img>
      <Img fluid={node.images[2].fluid}></Img>
    </GalleryContainer>
  )
}

export default Gallery
