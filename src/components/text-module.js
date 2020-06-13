import React from "react";
import styled from 'styled-components';

const TextModuleContainer = styled.article `
  max-width: var(--max-width-mid);
  padding: var(--big) var(--huge);
  margin: var(--small) auto;
  line-height: 1.5;
  border-left: 0px solid var(--green);
  transition: all .4s linear;

  &:hover {
    border-left: 20px solid var(--green);
    transition: all .4s linear;
  }
  
`

const InnerText = styled.div`
  max-width: var(--max-width-big);
  margin: 0 auto;

  h3 {
    color: var(--green);
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
