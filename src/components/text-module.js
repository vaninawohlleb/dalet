import React from "react";
import styled from 'styled-components';

const TextModuleContainer = styled.article `
  max-width: var(--max-width-mid);
  padding: var(--big) var(--huge);
  margin: var(--small) auto var(--big);
  line-height: 1.5;
  border: 4px solid var(--yellow);
`

const InnerText = styled.div`
  max-width: var(--max-width-big);
  margin: 0 auto;

  h3 {
    color: var(--dark-grey);
  }
  
  a {
    color: var(--green);
    font-family: var(--body-text);
  }
`

const TextModule = ({node, i}) => {
  return (
    <TextModuleContainer key={i}>
      <InnerText>
        <h3>{node.title}</h3>
        <p dangerouslySetInnerHTML={{ __html:node.description.childMarkdownRemark.html }} />
      </InnerText> 
    </TextModuleContainer>
  )
}

export default TextModule
