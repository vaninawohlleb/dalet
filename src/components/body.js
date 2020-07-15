import React from "react";
import styled from 'styled-components';

const BodyContainer = styled.div`
  max-width: var(--max-width-big);
  padding: var(--big);
  margin: 0 auto;
  line-height: 1.5;

  @media(min-width: 768px) {
    padding: var(--largeX) var(--huge);
  }
  img {
    max-width: 100%;
    margin: var(--small) auto;
  }

  a {
    color: var(--green);
    font-family: var(--body-text);
  }

  p {
    margin: var(--small) 0;
  }

  blockquote {
    position: relative;
    color: var(--dark-grey);
    
    &:before {
      content: '"';
      font-family: var(--body-text);
      font-size: 8rem;
      font-weight: 800;
      color: var(--yellow);
      position: absolute;
      top: -2rem;
      margin-left: -5rem;
    }

    &:after {
      content: '"';
      font-family: var(--body-text);
      font-size: 8rem;
      font-weight: 800;
      color: var(--yellow);
      position: absolute;
      bottom: -8rem;
      right: -2rem;
    }
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
