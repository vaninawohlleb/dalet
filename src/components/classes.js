import React from "react"

const Classes = ({nodes}) => {
  return (
    <div>
      {nodes.map(({node}) => {
        return (
          <article key={node.id}>
            <h3>{node.title}</h3>
          </article>
        )
      })}
    </div>
  )
}

export default Classes
