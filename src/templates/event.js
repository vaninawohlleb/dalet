import React from "react";
import Layout from "../components/layout";
import Img from 'gatsby-image';
import styled from 'styled-components';
import { graphql, Link } from "gatsby";
import Body from "../components/body";

const Header = styled.section`
  max-width: var(--max-width-large);
  padding: var(--huge);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 47vw 40vw;
  grid-column-gap: var(--big);
  justify-content: center;
  align-items: flex-start;
  background: var(--grey);
`

const HeaderText = styled.div``

const DateContainer = styled.h1`
  font-family: var(--heading-text);
  font-weight: 800;
  font-size: 5rem;
  margin: 0;
`
const DateWrapper = styled.hgroup `
  display: grid;
  grid-template-columns: 20% 70%;
  margin: var(--medium) 0;
`
const BodyWrapper = styled.section``

const Event = ({ data, location }) => {
  const event = data.contentfulEvent;

  const date = new Date(event.date),
    options = {
      day: 'numeric',
      month: 'long',
      weekday: 'long',
    },
    localeDate = date.toLocaleDateString('BG', options),
    splitLocaleDate = localeDate.split(','),
    splitDayMonth = splitLocaleDate[1].trim().split(' ');

  return (
  <Layout>
    <Header>
      <Img fluid={event.image.fluid} imgStyle={{ objectFit: 'contain' }}/>
      <HeaderText>
        <DateWrapper>
          <DateContainer>{splitDayMonth[0]}</DateContainer>
          <h3 className="uppercase">{splitDayMonth[1]}, {splitLocaleDate[0]}</h3>
        </DateWrapper>
        <h5 className="uppercase">Начало: {date.getHours()}:{date.getMinutes()}0</h5>
        <h2>{event.title}</h2>
        {event.hosts && 
        <p>Водещи:
        {event.hosts.map((host, i) => {
            return (
              <span key={i} className="dotted">{host}</span>
            )
          })}
        </p>
        }
        {/* <p>Цена: {event.price}</p> */}
      </HeaderText>
    </Header>
    <BodyWrapper>
      <Body node={event.description} />
      {event.importantInfo &&
        <article>
          <h4>{event.importantInfo[0].title}</h4>
          <p dangerouslySetInnerHTML={{ __html:event.importantInfo[0].childContentfulTextModuleDescriptionTextNode.childMarkdownRemark.html }} />
        </article>
      }
    </BodyWrapper>
  </Layout>
  )
}

export default Event

export const EventQuery = graphql`
query EventQuery($slug: String!) {
  contentfulEvent(slug: {eq: $slug}) {
    date
    hosts
    id
    slug
    title
    description {
      childMarkdownRemark {
        html
      }
    }
    image {
      fluid(maxWidth: 800) {
        ...GatsbyContentfulFluid
      }
    }
    importantInfo {
      title
      childContentfulTextModuleDescriptionTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
}
`