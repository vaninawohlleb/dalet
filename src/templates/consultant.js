import React from "react";
import Layout from "../components/layout";
import Img from 'gatsby-image';
import styled from 'styled-components';
import { graphql } from "gatsby";

const ConsultantHeader = styled.section`
  max-width: var(--max-width-large);
  padding: var(--huge);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 47vw 40vw;
  grid-column-gap: var(--big);
  justify-content: center;
  align-items: center;
  background: var(--grey);
  
  img {
    max-height: 100vh;
  }
`

const ConsultantBody = styled.section`
  padding: var(--small) var(--huge);
  margin: 0 auto;
`
const HeaderText = styled.hgroup``


const ClassesWrapper = styled.div `
  // padding: var(--big) var(--huge);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 37vw 50vw;
  grid-column-gap: var(--big);
  justify-content: center;
  align-items: center;
`

const SubHeader = styled.section``

const SubInfo = styled.section``

const Class = styled.li `
`

const Consultation = styled.li``

const ConsultationsWrapper = styled.ul`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 37vw 50vw;
  grid-column-gap: var(--big);
  justify-content: center;
  align-items: center;
`

const Consultant = ({ data, location }) => {
  const consultant = data.contentfulConsultant;

  return (
  <Layout>
    <ConsultantHeader>
      <Img fluid={consultant.photo.fluid} imgStyle={{ objectFit: 'contain' }}/>
      <HeaderText>
        <h2>{consultant.name}</h2>
        <span>{consultant.bio.childMarkdownRemark.rawMarkdownBody}</span>
      </HeaderText>
    </ConsultantHeader>
    <ConsultantBody>
      <ClassesWrapper>
        <SubHeader>
          <h3>Класове</h3>
        </SubHeader>
        <SubInfo>
          <ul>
            {consultant.classes.map((consultantClass) => {
              // TODO: Do this in a function
              const startDate = new Date(consultantClass.start),
                startDateOptions = {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric'
                },
                startLocaleDate = startDate.toLocaleDateString('BG', startDateOptions);

              const endDate = new Date(consultantClass.end),
                endDateOptions = {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric'
                },
                endLocaleDate = endDate.toLocaleDateString('BG', endDateOptions);

              return (
                <Class key={consultantClass.id}>
                  <h4>{consultantClass.title}</h4>
                  <span className="dotted">Старт: {startLocaleDate}</span>
                  <span className="middle dotted">Край: {endLocaleDate}</span> 
                  <span className="dotted">Цена: {consultantClass.price}</span>
                  <p>{consultantClass.description.childMarkdownRemark.rawMarkdownBody}</p>
                </Class>
              )})
            }
          </ul>
        </SubInfo>
      </ClassesWrapper>
      <ConsultationsWrapper>
        <SubHeader>
          <h3>Консултации</h3>
        </SubHeader>
        <SubInfo>
          {consultant.consultations.map((consultation) => {
            return (
              <Consultation key={consultation.id}>
                <h4>{consultation.title}</h4>
                <span className="dotted">Продължителност: {consultation.length}</span>
                <span className="dotted">Цена: {consultation.price}</span>
                <p>{consultation.description.childMarkdownRemark.rawMarkdownBody}</p>
            </Consultation>
            )
          })
        }
        </SubInfo>
      </ConsultationsWrapper>
    </ConsultantBody>
  </Layout>
  )
}

export default Consultant

export const ConsultantQuery = graphql`
query ConsultantQuery($slug: String!) {
  contentfulConsultant(slug: {eq: $slug}) {
    id
    slug
    name
    photo {
      fluid(maxWidth: 800) {
        ...GatsbyContentfulFluid
      }
    }
    bio {
      childMarkdownRemark {
        rawMarkdownBody
      }
    }
    classes {
      description {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      end
      price
      start
      title
      id
    }
    consultations {
      id
      description {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      length
      price
      title
    }
  }
}

`