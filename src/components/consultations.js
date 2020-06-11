import React,  { useState } from "react";
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';


const ConsultationContainer = styled.ul`
  display: grid;
  padding: var(--big);
  margin: 0 auto;
  grid-template-columns: repeat(4, 18.5vw);
  grid-column-gap: var(--medium);
  justify-content: center;
`
const Buttons = styled.div`
`
const Consultation = styled.li`
  .gatsby-image-wrapper {
    max-height: 160px;
  }
`

const Consultations = () => {
  const [index, setIndex] = useState(0);
  const {allContentfulConsultation} = useStaticQuery(
    graphql `
    query {
      allContentfulConsultation(limit: 5, sort: {
          fields: [updatedAt],
          order: DESC
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
            consultant {
              slug
              id
            }
            image {
              fluid(maxWidth: 600) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `
  )

  // const length = allContentfulConsultation.edges.length - 1;

  // const handleNext = () => {
  //   index === length ? setIndex(0) : setIndex(index + 1)
  // }

  // const handlePrevious = () => {
  //   index === 0 ? setIndex(length) : setIndex(index - 1);
  // }

  // const { node } = allContentfulConsultation.edges[index];

  return (
    <ConsultationContainer id="consultations">
      {/* <Buttons>
        <button onClick={() => handlePrevious()}>Previous</button>
        <button onClick={() => handleNext()}>Next</button>
      </Buttons>
      <Slide key={node.id}> */}
        {allContentfulConsultation.edges.map(({node}) => {
          return (
            <Consultation key={node.id}> 
              <Link to={`/consultant/${node.consultant.slug}#${node.slug}`} >
                <Img fluid={node.image.fluid}></Img>
                <h4>{node.title}</h4>
              </Link>
              <p>{node.description.description.slice(0, 300)}</p>
            </Consultation>
          )
        })}
  
      {/* </Slide> */}
    </ConsultationContainer>
  )
}

export default Consultations