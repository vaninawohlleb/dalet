import React from "react"
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from "../components/layout";

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
    color: var(--red);
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
    color: var(--red);
  }
`
const Posts = ({data}) => {
  const nodes = data.allContentfulPost.edges;
  
  return (
    <Layout>
      <PostsWrapper>
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
    </Layout>
  )
}

export default Posts


export const PostIndexQuery = graphql`
  query PostIndexQuery {
    allContentfulPost(sort: {
        fields: [updatedAt],
        order: DESC
      },
      filter: {
        node_locale: {
          eq: "bg"
        }
      }) {
      edges {
        node {
          id
          slug
          title
          description {
            description
          }
        }
      }
    }
  }
`