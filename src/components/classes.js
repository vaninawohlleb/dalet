import React from "react";
import { Link } from 'gatsby';
import styled from 'styled-components';

const ClassesContainer = styled.ul`
  padding: var(--big);
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 46%);
    grid-column-gap: var(--medium);
    justify-content: center;
  }
`

const Class = styled.li`
  padding: var(--small);
  color: white;
  display: flex;
  transition: all .5s;

  &:hover {
    transition: all .5s;
  }

  h3 {
    color: white;
    text-transform: uppercase;
  }

  &.meditation {
    h3 {
      color: var(--yellow);
    }
  }

  &.taro,
  &.Taro {
    h3 {
      color: var(--green);
    }
  }
  
  img {
    max-height: 10vh;
    margin-right: var(--medium);
  }

  .link {
    padding-bottom: var(--small);
    color: white;
    font-family: var(--body-text);
  }
`

const Classes = ({nodes}) => {
  return (
    <ClassesContainer id="classes">
      {nodes.map(({node}) => {
        const start_date = new Date(node.start),
          end_date = new Date(node.end)
        return (
          // categories[0] returns the primary category
          <Class key={node.id} className={node.categories ? node.categories[0] : ''}>
            <img src={node.categories ? `/img/${node.categories[0]}.svg` : ''} />
            <Link className="link" to={`class/${node.slug}`}>
              <h3>{node.title}</h3>
              <p>Продължителност: {node.length}</p>
              <p>Този курс е от {start_date.getDate()}.{start_date.getMonth()+1}.{start_date.getFullYear()} до {end_date.getDate()}.{end_date.getMonth()+1}.{end_date.getFullYear()}</p>
            </Link>
          </Class>
        )
      })}
    </ClassesContainer>
  )
}

export default Classes
