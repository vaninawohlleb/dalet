import React from "react";
import Layout from "../components/layout";
import Img from 'gatsby-image';
import styled from 'styled-components';
import { graphql, Link } from "gatsby";
import Body from "../components/body";
import TextModule from "../components/text-module";

const Header = styled.section`
  max-width: var(--max-width-large);
  padding: var(--huge);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 47vw 40vw;
  grid-column-gap: var(--big);
  justify-content: center;
  align-items: flex-start;
  background: var(--dark-grey);
  color: white;
`

const HeaderText = styled.div`
  a {
    color: var(--yellow);
    font-family: var(--body-text);
  }
`

const DateContainer = styled.h1`
  font-family: var(--heading-text);
  font-weight: 800;
  font-size: 5rem;
  margin: 0;
`

const DateWrapper = styled.hgroup `
  display: grid;
  grid-template-columns: 20% 70%;
  margin: 2px 0 var(--medium) 0;
  color: var(--yellow);
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
        <h2>{event.title}</h2>
        <div>
          <span className="dotted">Начало</span>
          <span className="dotted">{date.getHours()}:{date.getMinutes()}</span>
        </div>
        {event.hosts && 
        <div>
          <span className="dotted">Водещи</span>
          {event.hosts.map((host, i) => {
            return (
              <span key={i} className="dotted">{host}</span>
            )
          })}
        </div>
        }
        <div>
          <span className="dotted">Цена</span>
          <span className="dotted">{event.priceDetails}</span>
        </div>
          {event.class && 
          <p>
            <span className="dotted">Събитието е част от</span>
            <span className="dotted">
              <Link to={`/class/${event.class.slug}`}>{event.class.title}</Link>
              </span>
          </p>
          }
      </HeaderText>
    </Header>
    <BodyWrapper>
      <Body node={event.description} />
      {event.importantInfo &&
        <TextModule node={event.importantInfo[0]} />
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
    priceDetails
    repeatingEvent

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
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
}
`