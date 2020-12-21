import * as React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const MetaData = () => {
  const data = useStaticQuery(graphql`
    query {
      site{
        siteMetadata {
        title
        description
        }
      }
    }
  `);
  return data.site.siteMetadata;
}

export default MetaData