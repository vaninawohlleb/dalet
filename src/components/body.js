import React from "react";
import styled from 'styled-components';

const BodyContainer = styled.div`
  max-width: var(--max-width-big);
  padding: var(--small) var(--huge);
  margin: 0 auto;
  line-height: 1.5;

  img {
    max-width: 100%;
    margin: var(--small) auto;
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
