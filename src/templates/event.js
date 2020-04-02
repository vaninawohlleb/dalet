import React from "react"
// import { Link, graphql } from "gatsby"

const Event = ({ data, location }) => {
  console.log(data)
  return (
    <div location={location}>
      Event Page
    </div>
  )
}

export default Event
