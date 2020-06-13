import React from "react";
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from "gatsby";
import Button from "./button";

const GalleryContainer = styled.div`
  // max-width: var(--max-width-large);
  padding: var(--huge) 0 var(--tiny);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 50vw);
  justify-content: center;
`
const GalleryText = styled.div`
  padding: var(--huge);

  h2 {
    color: var(--green);
  }

  p {
    margin-bottom: var(--medium);
  }
`

const Gallery = ({node}) => {
  return (
    <GalleryContainer key={node.id}>
      <GalleryText>
        <h2>{node.title}</h2>
        <p>{node.description.description}</p>
      </GalleryText>
      <Img fluid={node.images[0].fluid}></Img>
      <Img fluid={node.images[1].fluid}></Img>
      <Img fluid={node.images[2].fluid}></Img>
    </GalleryContainer>
  )
}

export default Gallery
