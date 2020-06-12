import React from "react";
import Layout from "../components/layout";
import Img from 'gatsby-image';
import styled from 'styled-components';
import { graphql, Link } from "gatsby";
import ClassImg from '../components/class-image';
import ConsultationImg from '../components/consultation-image';

const ConsultantHeader = styled.section`
  max-width: var(--max-width-large);
  padding: var(--huge);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 47vw 40vw;
  grid-column-gap: var(--big);
  justify-content: center;
  align-items: center;
  
  .gatsby-image-wrapper {
    max-height: 80vh;
  }
`

const ConsultantBody = styled.section`
  padding: var(--small) 0 var(--huge);
  margin: 0 auto;
`
const HeaderText = styled.hgroup`
  p {
    margin: var(--small) 0;
  }
`


const ClassesWrapper = styled.div `
  padding: var(--huge) 0;
  width: 100%;
  background: var(--dark-grey);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 37vw 50vw;
  grid-column-gap: var(--big);
  justify-content: center;
  align-items: center;
  color: white;
`

const SubHeader = styled.section``

const SubInfo = styled.section`
  .heading-class {
    color: var(--yellow);
  }

  .heading-consultation {
    color: var(--red);
  }

`

const Class = styled.li`
  padding: var(--medium) 0;

  p {
    padding-bottom: var(--small);
  }
`

const Consultation = styled.li`
  padding: var(--medium) 0;

  p {
    padding-bottom: var(--small);
  }`

const ConsultationsWrapper = styled.ul`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 37vw 50vw;
  grid-column-gap: var(--big);
  justify-content: center;
  align-items: center;
`

const ButtonH5 = styled.h5`
  padding: var(--small);
  outline: none;
  border: 2px solid var(--yellow);
  color: var(--yellow);
`

const ContactModule = styled.div`
  a {
    font-family: var(--body-text);
    color: var(--red);
  }
`

const Consultant = ({ data, location }) => {
  const consultant = data.contentfulConsultant;

  return (
  <Layout>
    <ConsultantHeader>
      <Img fluid={consultant.photo.fluid} imgStyle={{ objectFit: 'contain' }}/>
      <HeaderText>
        <h2>{consultant.name}</h2>
        <p>{consultant.bio.childMarkdownRemark.rawMarkdownBody}</p>
        <ContactModule>
          {consultant.contact && consultant.contact.map((contactField, i) => {
            return (
              <span key={i}>
                {contactField.contactLink
                ? <a className="dotted" href={contactField.contactLink} target="_blank" rel="noopener noreferrer">{contactField.contactType}</a>
                : null
                }
                {contactField.contactDetail &&
                  <span>{contactField.contactDetail}</span>
                }
              </span>
            )
          })}
        </ContactModule>
      </HeaderText>
    </ConsultantHeader>
    <ConsultantBody>
      {consultant.classes &&
      <ClassesWrapper>
        <SubHeader>
          <ClassImg />
        </SubHeader>
        <SubInfo>
          <h2 className="heading-class">Класове</h2>
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
                  <p className = "uppercase">{consultantClass.title}</p>
                  <span className="dotted">Старт: {startLocaleDate}</span>
                  <span className="middle dotted">Край: {endLocaleDate}</span> 
                  <span className="dotted">Цена: {consultantClass.price}</span>
                  <p>{consultantClass.description.description.slice(0, 100)}...</p>
                  <Link to={`/class/${consultantClass.slug}`}><ButtonH5>Виж повече информация</ButtonH5></Link>
                </Class>
              )})
            }
          </ul>
        </SubInfo>
      </ClassesWrapper>
      }
      <ConsultationsWrapper>
        <SubHeader>
          <ConsultationImg />
        </SubHeader>
        <SubInfo>
           <h2 className="heading-consultation">Консултации</h2>
          {consultant.consultations.map((consultation) => {
            return (
              <Consultation key={consultation.id} id={consultation.slug}>
                <p className = "uppercase">{consultation.title}</p>
                <span className="dotted">Продължителност: {consultation.length}</span>
                <span className="dotted">Цена: {consultation.priceDetails}</span>
                <p>{consultation.description.childMarkdownRemark.rawMarkdownBody}</p>
                {consultation.contact &&
                <ContactModule>
                  {consultation.contact.map((contactField, i) => {
                    return (
                      <span key={i} >
                        {contactField.contactLink
                        ? <a className="dotted" href={contactField.contactLink}>{contactField.contactType}</a>
                        : null
                        }
                        {contactField.contactDetail &&
                          <span>{contactField.contactDetail}</span>
                        }
                      </span>
                    )
                  })}
                </ContactModule>
                }
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
    contact {
      contactType
      contactLink
      contactDetail
      id
    }
    classes {
      description {
        description
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      end
      priceDetails
      start
      title
      id
      slug
    }
    consultations {
      id
      description {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      length
      priceDetails
      title
      slug
      contact {
        contactDetail
        contactLink
        contactType
        id
      }
    }    
  }
}

`