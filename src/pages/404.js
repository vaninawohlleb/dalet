import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components';
import Layout from "../components/layout"
import SEO from "../components/seo"

const F0FContainer = styled.div `
  margin: 0 auto;
  padding: 0;
  display: grid;
  align-items: center;
  justify-content: center;
  height: 82vh;
  background: var(--dark-grey);

  h1 {
    color: var(--yellow);
  }
`

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <F0FContainer><h1>ОПС...няма такова място</h1></F0FContainer>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
