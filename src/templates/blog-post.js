import React from "react";
import Layout from "../components/layout";
import Img from 'gatsby-image';
import styled from 'styled-components';
import { graphql, Link } from "gatsby";
import Body from "../components/body";

const PostHeader = styled.section`
  max-width: var(--max-width-large);
  padding: var(--xxl) 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 47vw 40vw;
  grid-column-gap: var(--big);
  justify-content: center;
  align-items: center;
  background: var(--grey);

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

  return (
  <Layout>
    <PostHeader>
      <Img fluid={post.image.fluid}/>
      <HeaderText>
        <h2>{post.title}</h2>
        <span className="dotted after">
          <Link to={`/consultant/${post.author_ref.slug}`}>{post.author_ref.name}</Link>
        </span>
        <span className="dotted after">{post.createdAt}</span>
      </HeaderText>
    </PostHeader>
    <BodyWrapper>
      <Body node={post.description} />
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
    createdAt(locale: "BG", formatString: "mm MMMM")
    author_ref {
      name
      slug
    }
    description {
      childMarkdownRemark {
        html
      }
    }
    image {
      fluid(maxWidth: 800) {
        ...GatsbyContentfulFluid
      }
    }
  }
}

`