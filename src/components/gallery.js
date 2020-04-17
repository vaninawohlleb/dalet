import React from "react"

const Hero = ({node}) => {
  return (
    <section key={node.id}>
      <h3>{node.title}</h3>
    </section>
  )
}

export default Hero
