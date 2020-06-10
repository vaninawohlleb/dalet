import React from "react"
import { graphql } from "gatsby";
import styled from 'styled-components';

import Layout from "../components/layout";
// import Navigation from "../components/nav";
import Hero from "../components/hero";
import Consultants from "../components/consultants";
import Posts from "../components/posts";
import Consultations from "../components/consultations";
import Classes from "../components/classes";
import Events from "../components/events";
import Gallery from "../components/gallery";
import FeaturedEvent from "../components/featured";

const GreyContainer = styled.div`
  background: var(--dark-grey);
  padding: var(--big) 0;
  border-bottom: 2px solid white;
`

const HomePage = ({ data, location }) => {
  const events = data.allContentfulEvent.edges,
    classes = data.allContentfulClass.edges,
    // consultations = data.allContentfulConsultation.edges,
    posts = data.allContentfulPost.edges,
    consultants = data.allContentfulConsultant.edges,
    gallery = data.allContentfulGallery.edges[0],
    homePage = data.allContentfulPage.edges[0],
    // TODO: Always return 1 and always return the newest
    featuredEvent = events.find(({node}) => node.featuredEvent === true);

  return (
    <Layout location={location}>
      {/* <Navigation /> */}
      <Hero node={homePage.node} />
      <Consultants nodes={consultants} />
      <Posts nodes={posts} />
      <GreyContainer>
        <FeaturedEvent node={featuredEvent.node} />
      </GreyContainer>
      <Consultations />
      <GreyContainer>
        <Classes nodes={classes} />
      </GreyContainer>
      <Events nodes={events} />
      <Gallery node={gallery.node} />
    </Layout>
  )
}

export default HomePage

export const homePageQuery = graphql`
  query contentfulQuery {
    allContentfulPage(filter: {
      id: {
        eq: "aa2c0f0a-5ec1-5945-83e8-61b64980a906"
      }
    }) {
      edges {
        node {
          id
          cta1
          cta2
          contentful_id
          linkForFirstButton
          linkForSecondButton
          title
          description {
            description
          }
        }
      }
    }

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
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid
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
          categories
          featuredEvent
          repeatingEvent
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
          slug
          title
          start
          end
          price
          length
          categories
          description {
            description
          }
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
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
