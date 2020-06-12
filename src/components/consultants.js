import React from "react";
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ConsultantsContainer = styled.ul`
  padding: var(--big);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 25vw);
  grid-column-gap: var(--medium);
  justify-content: center;
`

const Consultant = styled.li`
  position: relative;

  .gatsby-image-wrapper {
    max-height: 40vh;

    img {
      width: 100%;
      height: 100%;
      background-color: white;
      transform: scale(1);
      transition: all .5s !important;

      &:hover {
        transform: scale(1.2);
        transition: all .5s !important;
      }
    }
  }

  h5 {
    position: absolute;
    z-index: 1;
    left: var(--small);
    top: var(--small);
    text-transform: uppercase;
    color: white;
  }
`

const Consultants = ({nodes}) => {
  return (
    <ConsultantsContainer>
      {nodes.map(({node}) => {
        return (
          <Consultant key={node.id}>
            <Link to={`consultant/${node.slug}`}>
              <h5>{node.name}</h5>
              <Img fluid={node.photo.fluid}></Img>
            </Link>
          </Consultant>
        )
      })}
    </ConsultantsContainer>
  )
}

export default Consultants