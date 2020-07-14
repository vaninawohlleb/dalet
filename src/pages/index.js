import React from "react"
import { graphql } from "gatsby";
import styled from 'styled-components';

import Layout from "../components/layout";
import Hero from "../components/hero";
import Consultants from "../components/consultants";
import Posts from "../components/posts-grid";
import Consultations from "../components/consultations";
import Classes from "../components/classes";
import Calendar from "../components/calendar-grid";
import Gallery from "../components/gallery";
import FeaturedEvent from "../components/featured";

const GreyContainer = styled.div`
  background: var(--dark-grey);
  padding: var(--big) 0;
  margin: var(--big) 0;
`

const HomePage = ({ data, location }) => {
  const events = data.AllEvents.edges,
    classes = data.allContentfulClass.edges,
    // consultations = data.allContentfulConsultation.edges,
    posts = data.allContentfulPost.edges,
    consultants = data.allContentfulConsultant.edges,
    gallery = data.allContentfulGallery.edges[0],
    homePage = data.allContentfulPage.edges[0],
    featuredEvent = data.FeaturedEvent.edges[0];

  return (
    <Layout location={location}>
      <Hero node={homePage.node} />
      <Consultants nodes={consultants} />
      <GreyContainer>
        <Classes nodes={classes} />
      </GreyContainer>
      <Posts nodes={posts} location={location}/>
        {featuredEvent && featuredEvent.node &&
        <GreyContainer>
          <FeaturedEvent node={featuredEvent.node} />
        </GreyContainer>
        }
      <Consultations />
      <Calendar nodes={events} location={location}/>
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
          contentful_id
          title
          description {
             childMarkdownRemark {
              html
             }
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
      fields: [createdAt],
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
          categories
          description {
            description
          }
        }
      }
    }

    AllEvents: allContentfulEvent(limit: 3, 
      sort: {
        fields: [date],
        order: ASC
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

    FeaturedEvent: allContentfulEvent(limit: 1,
      sort: {
        fields: [date],
        order: ASC
      },
      filter: {
        node_locale: {
          eq: "bg"
        },
        featuredEvent: {
          eq: true
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
          priceDetails
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
