import React from "react";
import styled from 'styled-components';
import Img from 'gatsby-image';

const BodyContainer = styled.div`
  max-width: var(--max-width-big);
  padding: var(--small) var(--huge);
  margin: 0 auto;
  line-height: 1.5;

  img {
    max-width: 100%;
  }
`

const Body = ({node, i}) => {
  return (
    <div key={i}>
      <BodyContainer dangerouslySetInnerHTML={{ __html: node.childMarkdownRemark.html}} />
    </div>
  )
}

export default Body
