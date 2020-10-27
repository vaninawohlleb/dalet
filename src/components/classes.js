import React from "react";
import { Link } from 'gatsby';
import styled from 'styled-components';

const ClassesContainer = styled.ul`
  padding: var(--big);
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 25vw);
    grid-column-gap: var(--medium);
    justify-content: center;
  }
`

const Class = styled.li`
  padding: var(--small);
  color: white;
  border-radius: 5px;
  transition: all .5s;

  &:hover {
    transition: all .5s;
  }

  h3 {
    color: white;
  }

  &.meditation {
    color: var(--yellow);

    h3, a {
      color: var(--yellow);
    }
  }

  &.taro {
    color: var(--green);

    h3, a {
      color: var(--green);
    }
  }
  

  .link {
    display: flex;

    img {
      max-height: 4vw;
      margin-right: var(--small);
      align-self: center;
    }
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
            <Link className="link" to={`class/${node.slug}`}>
              <img src={node.categories ? `/img/${node.categories[0]}.svg` : ''} />
              <h3>{node.title}</h3>
            </Link>
            <p>Продължителност: {node.length}</p>
            <p>Този курс е от {start_date.getDate()}.{start_date.getMonth()+1}.{start_date.getFullYear()} до {end_date.getDate()}.{end_date.getMonth()+1}.{end_date.getFullYear()}</p>
          </Class>
        )
      })}
    </ClassesContainer>
  )
}

export default Classes
