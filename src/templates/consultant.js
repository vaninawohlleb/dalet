import React from "react";
import Layout from "../components/layout";
import Img from 'gatsby-image';
import styled from 'styled-components';
import { graphql, Link } from "gatsby";
import ClassImg from '../components/class-image';
import ConsultationImg from '../components/consultation-image';
import Button from "../components/button";

const ConsultantHeader = styled.section`
  max-width: var(--max-width-large);
  padding: var(--big);
  margin: 0 auto;
  background: var(--dark-grey);
  color: white;

  @media (min-width: 768px) { 
    padding: var(--large) 0 var(--xxl);
    display: grid;
    grid-template-columns: 47vw 40vw;
    grid-column-gap: var(--big);
    justify-content: center;
    align-items: center;
  }
  
  .gatsby-image-wrapper {
    max-height: 80vh;
  }
`

const HeaderText = styled.hgroup `
  p {
    margin: var(--small) 0;
  }
`

const ConsultantBody = styled.section`
  padding: var(--big) 0 var(--huge);
  margin: 0 auto;
`

const ClassesWrapper = styled.div `
  width: 100%;
  margin: 0 auto;
  padding: var(--big);
  
  // grid-template-columns: 30vw 60vw;
  // grid-column-gap: var(--small);

  @media (min-width: 768px) { 
    padding: 0;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 37vw 50vw;
    grid-column-gap: var(--big);
  }
`

const SubHeader = styled.section``

const SubInfo = styled.section`
  h2 {
    color: var(--green);
  }
  
  .uppercase {
    color: var(--dark-grey);
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
    padding-bottom: 5px;
  }
`

const ConsultationsWrapper = styled.ul`
  width: 100%;
  margin: 0 auto;
  padding: var(--big);

  @media (min-width: 768px) { 
    padding: var(--large) 0 var(--xxl);
    display: grid;
    grid-template-columns: 37vw 50vw;
    grid-column-gap: var(--big);
    justify-content: center;
    align-items: center;
  }
`

const ContactModule = styled.div`
  a {
    font-family: var(--body-text);
    color: var(--yellow);

    &.consultation {
      color: var(--green);
    }
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
        <div dangerouslySetInnerHTML={{ __html: consultant.bio.childMarkdownRemark.html}} />
        <ContactModule>
          {consultant.contact && consultant.contact.map((contactField, i) => {
            return (
              <span key={i}>
                {contactField.contactLink
                ? <a className="dotted after" href={contactField.contactLink} target="_blank" rel="noopener noreferrer">{contactField.contactType}</a>
                : null
                }
                {contactField.contactDetail &&
                  <span className="dotted after">{contactField.contactDetail}</span>
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
          <h2>Класове</h2>
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
                  <span>Старт</span>
                  <span className="dotted all">{startLocaleDate}</span>
                  <span>Край</span>
                  <span className="dotted all">{endLocaleDate}</span> 
                  <span>Цена</span>
                  <span className="dotted all">{consultantClass.price}</span>
                  <p>{consultantClass.description.description.slice(0, 100)}...</p>
                  <Link to={`/class/${consultantClass.slug}`}><Button cta="Виж повече информация" color="white" border="var(--green)" originBgr="var(--dark-grey)" changedBgr="var(--green)" /></Link>
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
          <h2>Консултации</h2>
          {consultant.consultations.map((consultation) => {
            return (
              <Consultation key={consultation.id} id={consultation.slug}>
                <p className = "uppercase">{consultation.title}</p>
                <span>Продължителност</span>
                <span className="dotted all">{consultation.length}</span>
                <span>Цена</span>
                <span className="dotted all">{consultation.priceDetails}</span>
                <p dangerouslySetInnerHTML={{ __html: consultation.description.childMarkdownRemark.html}} />
                {consultation.contact &&
                <ContactModule>
                  {consultation.contact.map((contactField, i) => {
                    return (
                      <span key={i} >
                        {contactField.contactLink
                        ? <a className="dotted all consultation" href={contactField.contactLink}>{contactField.contactType}</a>
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
        html
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
          html
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