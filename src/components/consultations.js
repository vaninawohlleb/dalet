import React from "react"

const Consultations = ({nodes}) => {
  return (
    <div>
      {nodes.map(({node}) => {
        return (
          <article key={node.id}>
            <h4>{node.title}</h4>
          </article>
        )
      })}
    </div>
  )
}

export default Consultations
