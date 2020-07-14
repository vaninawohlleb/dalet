import React from "react";
import Layout from "../components/layout";
import Img from 'gatsby-image';
import styled from 'styled-components';
import { graphql, Link } from "gatsby";
import Body from "../components/body";

const PostHeader = styled.section`
  max-width: var(--max-width-large);
  background: var(--grey);
  padding: var(--big);
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: var(--xxl);
    display: grid;
    grid-template-columns: minmax(0, 1fr) 1fr;
    grid-column-gap: var(--big);
    justify-content: center;
    align-items: center;
  }

  h2, a {
    color: var(--green);
  }

  a {
    font-family: var(--body-text);

    &:visited {
      color: var(--green);
    }
  }
`

const BodyWrapper = styled.section`
`
const HeaderText = styled.hgroup``


const BlogPost = ({ data, location }) => {
  const post = data.contentfulPost;
  console.log(post.categories)
  
  return (
  <Layout>
    <PostHeader>
      <Img fluid={post.image.fluid}/>
      <HeaderText>
        <h2>{post.title}</h2>
        <span className="dotted after">
          {post.authorMoreThenOne.map((author, i) => {
            return <Link key={i} to={`/consultant/${author.slug}`}>{author.name}</Link>
          })}
        </span>
        <span className="dotted after">{post.createdAt}</span>
        {post.categories.map((category, i) => {
          return <span key={i} className="dotted after">{category}</span>
        })}
      </HeaderText>
    </PostHeader>
    <BodyWrapper>
      {post.description &&
      <Body node={post.description} />
      }
    </BodyWrapper>
  </Layout>
  )
}

export default BlogPost

export const PostsQuery = graphql`
query PostQuery($slug: String!) {
  contentfulPost(slug: {eq: $slug}) {
    id
    title
    categories
    createdAt(locale: "BG", formatString: "D MMMM")
    authorMoreThenOne {
      name
      slug
    }
    description {
      childMarkdownRemark {
        html
      }
    }
    image {
      fluid(maxWidth: 500) {
        ...GatsbyContentfulFluid
      }
    }
  }
}

`