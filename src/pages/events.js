import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby";
import Layout from "../components/layout";

const CalendarContainer = styled.ul`
  padding: var(--big);
  margin: 0 auto;
  background: var(--dark-grey);
  color: white;
`

const EventContainer = styled.li`
  display: grid;
  grid-template-columns: 20vw 73vw;
  grid-column-gap: var(--medium);
  justify-content: center;
  padding: var(--big) 0;
`

const EventDate = styled.div`
  text-align: center;
  margin-top: var(--tiny);
`

const EventDetails = styled.div`
  display: flex;

  img {
    align-self: flex-start;
    margin-top: var(--tiny);
    min-width: 4.5vw;
  }
`

const EventInfo = styled.div`
  padding: 0 var(--big);
  
  p {
    margin: .5rem 0;
  }

  &.meditation {
    h3, .color {
      color: var(--yellow);
    }
  }

  &.astrology {
    h3 {
      color: white;
    }
  }

  &.taro {
    h3, .color {
      color: var(--red);
    }
  }
`

const EventDay = styled.div `
  font-family: var(--heading-text);
  font-weight: 800;
  font-size: 5rem;
`

const Events = ({data}) => {
  const nodes = data.allContentfulEvent.edges;

  return (
    <Layout>
      <CalendarContainer> {
        nodes.map(({node}) => {
          const date = new Date(node.date),
            dateOptions = {
              weekday: 'long',
              month: 'long',
              day: 'numeric'
            },
            localeDate = date.toLocaleDateString('BG', dateOptions),
            splitLocaleDate = localeDate.split(','),
            splitDayMonth = splitLocaleDate[1].trim().split(' ');

            return (
              <EventContainer key={node.id}>
                <EventDate>
                  <h5>{splitLocaleDate[0]}</h5>
                  <EventDay>{splitDayMonth[0]}</EventDay>
                  <h5>{splitDayMonth[1]}</h5>
                </EventDate>
                <EventDetails>
                  <img src={node.categories ? `/img/${node.categories[0]}.svg` : ''} />
                  <EventInfo className = {node.categories ? node.categories[0] : ''}>
                    <Link to={`event/${node.slug}`}><h3>{node.title}</h3></Link>
                    {/* TODO: Why getMinutes shows just the first digit */}
                    <p className="uppercase" >{date.getHours()}:{date.getMinutes()}0</p>
                    <div className="color"><h5>Водещи: </h5> {
                        node.hosts.map((host, index) => {
                          return <span className="dotted" key={index}>{host}</span>
                        })
                      } 
                    </div>
                    <p>{node.description.description.slice(0, 300)}</p>
                    {node.repeatingEvent && node.repeatingEvent === true &&
                      <p className="uppercase color dotted">Повтарящо се събитие</p>
                    }
                  </EventInfo>
                </EventDetails>
              </EventContainer>
            )
          })}
      </CalendarContainer>
    </Layout>
  )
}

export default Events

export const EventIndexQuery = graphql`
  query EventIndexQuery {
    allContentfulEvent(sort: {
        fields: [date],
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
          hosts
          date(formatString: "")
          categories
          featuredEvent
          repeatingEvent
        }
      }
    }
  }
`
