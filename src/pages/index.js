import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"

const HomePage = ({ data, location }) => {
  const events = data.allContentfulEvent.edges,
    classes = data.allContentfulClass.edges,
    consultations = data.allContentfulConsultation.edges,
    posts = data.allContentfulPost.edges,
    consultants = data.allContentfulConsultant.edges,
    gallery = data.allContentfulGallery.edges[0];
  return (
    <Layout location={location}>
      {consultants.map(({node}) => {
        return (
          <article key={node.id}>
            <h3>{node.name}</h3>
          </article>
        )
      })}
      {posts.map(({ node }) => {
        return (
          <article key={node.id}>
            <h3>{node.title}</h3>
          </article>
        )
      })}
      {consultations.map(({ node }) => {
        return (
          <article key={node.id}>
            <h3>{node.title}</h3>
          </article>
        )
      })}
      {classes.map(({ node }) => {
        return (
          <article key={node.id}>
            <h3>{node.title}</h3>
          </article>
        )
      })}
      {events.map(({ node }) => {
        return (
          <article key={node.id}>
            <h3>{node.title}</h3>
          </article>
        )
      })}
      <article key={gallery.node.id}>
        <h3>{gallery.node.title}</h3>
      </article>
    </Layout>
  )
}

export default HomePage

export const homePageQuery = graphql`
  query contentfulQuery {
    allContentfulConsultant (
      limit: 3, 
      sort: { fields: [updatedAt], order: DESC },
      filter: {
      node_locale: {
        eq: "bg"
      }
      }) {
      edges {
        node {
          id
          name
          slug
          photo {
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }

    allContentfulPost(limit: 2, sort: {
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

    allContentfulConsultation(limit: 5, sort: {
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
          image {
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }

    allContentfulEvent(limit: 6, sort: {
      fields: [date],
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
          hosts
          date(formatString: "")
          weekDay
          categories
        }
      }
    }
    
    allContentfulClass(limit: 4, filter: {
        node_locale: {
          eq: "bg"
        }
      }) {
      edges {
        node {
          id
          title
        }
      }
    }

    allContentfulGallery(limit: 1, filter: {
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
          images {
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`
