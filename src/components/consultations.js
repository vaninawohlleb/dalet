import React,  { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const ButtonGroup = ({ next, previous }) => {
  return (
    <div className="carousel-button-group">
      <ButtonOne onClick={() => previous()}><img src="/img/next.svg" /></ButtonOne>
      <ButtonTwo onClick={() => next()}><img src="/img/next.svg" /></ButtonTwo>
    </div>
  );
};

const ButtonOne = styled.button`
  background: white;
  border: none;
  transform: rotate(180deg);

  &:focus {
    outline: none;
  }

  img {
    margin-top: 3px;
  }
`

const ButtonTwo = styled.button`
  background: white;
  border: none;

  &:focus {
    outline: none;
  }
`

const ConsultationContainer = styled.div`
  padding: var(--tiny);
  margin: 0 auto;
  max-width: var(--max-width-big);

  @media (min-width: 768px) {
    padding: var(--big);
  }

  h2 {
    color: var(--green);margin-bottom: var(--tiny);
    padding: 0 var(--small);
  }

  .carousel-button-group {
    padding: var(--tiny);
  }

  .react-multiple-carousel__arrow--left,
  .react-multiple-carousel__arrow--right {
    top: 30%;
  }

  .react-multiple-carousel__arrow {
    background: var(--green);
   // border: 2px solid var(--green);

    // &:before {
    //   color: var(--green);
    // }
  }

  .react-multiple-carousel__arrow--right {
    right: 0%;
  }

  .react-multiple-carousel__arrow--left {
    left: 0%;
  }
`

const Consultation = styled.div`
  padding: var(--medium);
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
    max-height: 35vh;
  }
`

const Consultations = () => {
  
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

  return (
    <ConsultationContainer id="consultations">
      <h2>Консултации</h2>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        infinite={true}
        responsive={responsive}
        arrows={true} 
        // customButtonGroup={<ButtonGroup />}
        // renderButtonGroupOutside={true}
      >
        {allContentfulConsultation.edges &&
          allContentfulConsultation.edges.map(({ node }, i) => {
            return (
              <Consultation key={node.id}>
                <Link to={`/consultant/${node.consultant_1.slug}#${node.slug}`}>
                  <Img fluid={node.image.fluid}></Img>
                  <h4>{node.title}</h4>
                </Link>
                <p>{node.description.description.slice(0, 300)}</p>
              </Consultation>
            )
          })}
      </Carousel>
    </ConsultationContainer>
  )
}

export default Consultations