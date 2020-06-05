import React from "react";
import { Link } from 'gatsby';
import styled from 'styled-components';

const ClassesContainer = styled.ul`
  padding: var(--big);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 25vw);
  grid-column-gap: var(--medium);
  justify-content: center;
`

const Class = styled.li`
  padding: var(--small);

  &.meditation {
    color: var(--green);

    h3 {
      color: var(--green);
    }
  }

  &.astrology {
    color: var(--red);

    h3 {
      color: var(--red);
    }
  }

  .link {
    display: flex;

    img {
      max-height: 2.5rem;
    margin-right: var(--small);
    align-self: center;
    }
  }
`

const Classes = ({nodes}) => {
  return (
    <ClassesContainer>
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
            <p>Този курс е от {start_date.getDate()}.{start_date.getMonth()}.{start_date.getFullYear()} до {end_date.getDate()}.{end_date.getMonth()}.{end_date.getFullYear()}</p>
          </Class>
        )
      })}
    </ClassesContainer>
  )
}

export default Classes
