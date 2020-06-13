import React from "react";
import styled from 'styled-components';

const ButtonH5 = styled.h5 `
  padding: var(--small);
  text-transform: uppercase;
  font-size: calc(.7rem + .1vw);
  font-weight: 900;

  color: ${props => props.color};
  border: 2px solid ${props => props.borderColor};

  background: linear-gradient(to right, ${props => props.originBgr}, ${props => props.originBgr} 50%, ${props => props.changedBgr} 50%);
  background-size: 202% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;

  &:hover {
    background-position: 0 100%;
  }
`

const Body = ({color, changedBgr, originBgr, borderColor, cta, i}) => {
  return (
    <ButtonH5 key={i} color={color} changedBgr={changedBgr} originBgr={originBgr} borderColor={borderColor}>
      {cta}
    </ButtonH5>
  )
}

export default Body
