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

  h4 {
    position: absolute;
    z-index: 1;
    left: var(--small);
    text-transform: uppercase;
  }
`

const Consultants = ({nodes}) => {
  return (
    <ConsultantsContainer>
      {nodes.map(({node}) => {
        return (
          <Consultant key={node.id}>
            <Link to={`consultant/${node.slug}`}>
              <h4>{node.name}</h4>
              <Img fluid={node.photo.fluid}></Img>
            </Link>
          </Consultant>
        )
      })}
    </ConsultantsContainer>
  )
}

export default Consultants
