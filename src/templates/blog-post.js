import React from "react";
import Layout from "../components/layout";
import Img from 'gatsby-image';
import styled from 'styled-components';
import { graphql } from "gatsby";

const PostHeader = styled.section`
  max-width: var(--max-width-large);
  padding: var(--huge);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 47vw 40vw;
  grid-column-gap: var(--big);
  justify-content: center;
  align-items: center;
  background: var(--grey);
`

const PostBody = styled.section`
  max-width: var(--max-width-mid);
  padding: var(--small) var(--huge);
  margin: 0 auto;
  line-height: 1.5;
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
        <span className="dotted">{post.categories[0]}</span>
        <span className="dotted">{post.author_ref.name}</span>
      </HeaderText>
    </PostHeader>
    <PostBody>
      {post.description.childMarkdownRemark.rawMarkdownBody}
    </PostBody>
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
    author_ref {
      name
      slug
    }
    description {
      childMarkdownRemark {
        rawMarkdownBody
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