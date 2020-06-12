import React from "react"
import styled from 'styled-components';
import { Link } from 'gatsby';

const PostsWrapper = styled.div`
  padding: var(--big);
  margin: 0 auto;
  display: grid;
  justify-content: center;
`

const PostsText = styled.div`
  padding: 0 var(--big);

  h2 {
    text-transform: uppercase;
    margin: var(--tiny) 0;
    color: var(--dark-grey);
  }

  a {
    font-family: var(--body-text);
    color: var(--green);
  }
`

const PostsContainer = styled.ul `
  // max-width: var(--max-width-large);
  padding: var(--big);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 38.5vw);
  grid-column-gap: var(--medium);

  h3 {
    color: var(--green);

    background: linear-gradient(to right, var(--dark-grey), var(--dark-grey) 50%, var(--green) 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 320ms ease;

    &:hover {
      background-position: 0 100%;
    }
  }
`
const Posts = ({nodes}) => {
  return (
    <PostsWrapper>
      <PostsText>
        <h2>Последни новини, съвети и предсказания</h2>
        <Link to="/posts">Виж всички новини</Link>
      </PostsText>
      <PostsContainer>
        {nodes.map(({node}) => {
          return (
            <li key={node.id}>
              <Link to={`post/${node.slug}`}>
                <h3>{node.title}</h3>
              </Link>
              <p>{node.description.description.slice(0, 300)}</p>
            </li>
          )
        })}
      </PostsContainer>
    </PostsWrapper>
  )
}

export default Posts
