import React from "react";
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styled from 'styled-components';

const Consultants = ({nodes}) => {
  console.log(nodes)
  return (
    <div>
      {nodes.map(({node}) => {
        return (
          <article key={node.id}>
            <Link to={`consultant/${node.slug}`}>
              <h3>{node.name}</h3>
              <Img fluid={node.photo.fluid}></Img>
            </Link>
          </article>
        )
      })}
    </div>
  )
}

export default Consultants
