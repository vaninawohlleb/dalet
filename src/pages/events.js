import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import CalendarGrid from "../components/calendar-grid";

const EventsPage = ({data, location}) => {
  const nodes = data.allContentfulEvent.edges;

  return (
    <Layout>
      <CalendarGrid nodes={nodes} location={location}/> 
    </Layout>
  )
}

export default EventsPage

export const EventIndexQuery = graphql`
  query EventIndexQuery {
    allContentfulEvent(sort: {
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
  }
`
