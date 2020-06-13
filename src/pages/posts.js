import React from "react"
import Layout from "../components/layout";
import PostsGrid from "../components/posts-grid";

const PostsPage = ({data, location}) => {
  const nodes = data.allContentfulPost.edges;
  
  return (
    <Layout>
      <PostsGrid nodes={nodes} location={location}/>
    </Layout>
  )
}

export default PostsPage


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