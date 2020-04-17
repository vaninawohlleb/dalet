import React from "react"

const BlogPost = ({ data, location }) => {
  console.log(data)
  return (
    <div location={location}>
      Blog Post Page
    </div>
  )
}

export default BlogPost
