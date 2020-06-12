import React from "react";
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from "gatsby";

const GalleryContainer = styled.div`
  // max-width: var(--max-width-large);
  padding: var(--huge) 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 50vw);
  justify-content: center;

  // .gatsby-image-wrapper {
  //   background: var(--dark-grey);
  // }
`
// extract this as a button
const ButtonH5 = styled.h5`
  padding: var(--small);
  color: white;
  margin: var(--medium) 0;
  
  background: linear-gradient(to right, var(--dark-grey), var(--dark-grey) 50%, var(--green) 50%);
  background-clip: text;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;

  &:hover {
    background-position: 0 100%;
  }
`

const GalleryText = styled.div`
  padding: var(--huge);

  h2 {
    color: var(--green);
  }
`

const Gallery = ({node}) => {
  return (
    <GalleryContainer key={node.id}>
      <GalleryText>
        <h2>{node.title}</h2>
        <p>{node.description.description}</p>
        <Link><ButtonH5>Направете запитване</ButtonH5></Link>
      </GalleryText>
      <Img fluid={node.images[0].fluid}></Img>
      <Img fluid={node.images[1].fluid}></Img>
      <Img fluid={node.images[2].fluid}></Img>
    </GalleryContainer>
  )
}

export default Gallery
