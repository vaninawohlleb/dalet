import React from "react"
import styled from 'styled-components';
import { Link } from 'gatsby';


const Items = ({ nodes }) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <PostsContainer>
      {nodes.map(({node}) => {
        return (
          <li key={node.id}>
            <Link to={`${rootPath}post/${node.slug}`}>
              <h3>{node.title}</h3>
            </Link>
            {node.description && 
              <p>{node.description.description.slice(0, 300)}</p>
            }
          </li>
        )
      })}
    </PostsContainer>
  )
};

const PostsWrapper = styled.div`
  padding: var(--big);
  margin: 0 auto;
  display: grid;
  justify-content: center;
`

const PostsText = styled.div`
  padding: 0 var(--tiny);

  @media (min-width: 768px) {
    padding: 0 var(--big);
  }

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

const PostsCategories = styled.div`
  display: flex;
  color: var(--green);

  h2 {
    margin-left: var(--small);
  }
`

const PostsContainer = styled.ul `
  padding: var(--tiny);
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: var(--big);
    display: grid;
    grid-template-columns: repeat(2, 38.5vw);
    grid-column-gap: var(--medium);
  }

  li {
    margin: var(--big) 0;

    @media (min-width: 768px) { 
      margin: var(--medium) 0;
    }
  }

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
const Posts = ({nodes, location}) => {
  const taro_posts = nodes.filter(({node}) => node.categories.includes('таро')),
      reiki_posts = nodes.filter(({node}) => node.categories.includes('рейки')),
      astrology_posts = nodes.filter(({node}) => node.categories.includes('астрология')),
      misc_posts = nodes.filter(({node}) => !node.categories.includes('астрология') 
        && !node.categories.includes('рейки') && !node.categories.includes('таро'));
  return (
    <div>
      {location.pathname === '/' &&
      <PostsWrapper id="posts">
        <PostsText>
          <h2>Последни новини, статии и прогнози</h2>
          <Link to="/posts">Виж всички новини</Link>
        </PostsText>
        <Items nodes={nodes} />
      </PostsWrapper>
    }
    {location.pathname !== '/' &&
    <PostsWrapper>
      <Items nodes={misc_posts} />
      <PostsCategories >
        <img src="/img/taro.svg" />
        <h2 className="taro">Таро</h2>
      </PostsCategories>
      <Items nodes={taro_posts} />
      <PostsCategories >
        <img src="/img/meditation-green.svg" />
        <h2 className="reiki">Рейки</h2>
      </PostsCategories>
      <Items nodes={reiki_posts} />
      <PostsCategories>
        <img src="/img/astrology-green.svg" />
        <h2 className="astro">Астрология</h2>
      </PostsCategories>
      <Items nodes={astrology_posts} />
    </PostsWrapper>
    }
    </div>
  )
}

export default Posts
