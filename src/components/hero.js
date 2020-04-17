import React from "react"

const Hero = ({node}) => {
  return (
    <section key={node.id}>
      <h1>{node.title}</h1>
      <p>{node.description.description}</p>
      <div>
        <a href={node.linkForFirstButton}>{node.cta1}</a>
        <a href={node.linkForSecondButton}>{node.cta2}</a>
      </div>
    </section>
  )
}

export default Hero
