import React,  { useState } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';


const ConsultationContainer = styled.ul`
  display: grid;
  padding: var(--tiny);
  margin: 0 auto;
  grid-template-columns: repeat(2, 44vw);
  grid-column-gap: var(--small);

  @media (min-width: 768px) {
    padding: var(--big);
    grid-template-columns: repeat(4, 19.1vw);
    grid-column-gap: var(--medium);
    justify-content: center;
    align-items: start;
    height: 80vh;
  }

  .slide-enter {
    transform: translateX(100%);
    opacity: 0;
  }

  .slide-enter.slide-enter-active {
    transform: translateX(0%);
    opacity: 1;
    transition: all 500ms ease-in;
  }

`
const Nav = styled.div`
  color: var(--green);
  
  button {
    padding: var(--tiny);
    background: white;
    border: none;
    color: var(--green);
    display: block;

    &:focus {
      outline: none;
    }
  }
`
const Consultation = styled.li`
  padding: var(--small);
  width: 100%;
  height: 100%;

  &:hover {
    h4 {
      background-position: 0 100%;
    }
  }

  h4 {
    color: var(--green);

    background: linear-gradient(to right, var(--dark-grey), var(--dark-grey) 50%, var(--green) 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 320ms ease;
  }

  .gatsby-image-wrapper {
    max-height: 160px;
  }
`

const Consultations = () => {
  const [index, setIndex] = useState(0);
  const {allContentfulConsultation} = useStaticQuery(
    graphql `
    query {
      allContentfulConsultation(limit: 10, sort: {
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
            consultant_1 {
              slug
              name
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

  const length = allContentfulConsultation.edges.length - 3;

  const handleNext = () => {
    index === length ? setIndex(0) : setIndex(index + 3)
  }

  // const handlePrevious = () => {
  //   index === 0 ? setIndex(length) : setIndex(index - 3);
  // }

  let consult_group = [];

  for (let i = index; i < allContentfulConsultation.edges.length; i++) {
    let consultation = allContentfulConsultation.edges[i].node;
    consult_group.push(consultation);
  }

  return (
    <ConsultationContainer id="consultations">
      <Nav>
        <h3>Консултации</h3>
        <button onClick={() => handleNext()}><img src="/img/next.svg" /></button>
      </Nav>
      {consult_group && consult_group.slice(0, 3).map(( node, i ) => {
        return (
          <CSSTransitionGroup
            transitionName="slide"
            transitionEnterTimeout={500}
            transitionLeave={false}
            key={i}
          >
            <Consultation key={node.id}>
              <Link to={`/consultant/${node.consultant_1.slug}#${node.slug}`}>
                <Img fluid={node.image.fluid}></Img>
                <h4>{node.title}</h4>
              </Link>
              <p>{node.description.description.slice(0, 300)}</p>
            </Consultation>
          </CSSTransitionGroup>
        )
        })
      }
    </ConsultationContainer>
  )
}

export default Consultations