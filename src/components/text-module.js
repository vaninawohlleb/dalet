import React from "react";
import styled from 'styled-components';

const TextModuleContainer = styled.article `
  // max-width: var(--max-width-big);
  padding: var(--small) var(--huge);
  margin: 0 auto;
  line-height: 1.5;
  background: var(--dark-grey);
  color: white;
`

const InnerText = styled.div`
  max-width: var(--max-width-big);
  margin: 0 auto;
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
