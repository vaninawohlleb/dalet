import React from "react"
import { Link, graphql } from "gatsby"

const BlogPost = ({ data, location }) => {
  console.log(data)
  return (
    <div location={location}>
      Blog Post Page
    </div>
  )
}

export default BlogPost
