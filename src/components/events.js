import React from "react";
import styled from 'styled-components';

const CalendarContainer = styled.ul`
  padding: var(--big);
  margin: 0 auto;
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
`

const Details = styled.p`
  font-size: calc(.7rem + .1vw);
  text-transform: uppercase;
  font-weight: 800;
`

const EventDetails = styled.div`
  display: flex;
`

const EventInfo = styled.div`
  padding: 0 var(--big);
`

const EventDay = styled.div `
  font-family: var(--heading-text);
  font-weight: 800;
  font-size: 5rem;
`

const Events = ({nodes}) => {
  return (
    <CalendarContainer>
      {nodes.map(({node}) => {
      const date = new Date(node.date),
        dateOptions = { weekday: 'long', month: 'long', day: 'numeric'},
        localeDate = date.toLocaleDateString('BG', dateOptions),
        splitLocaleDate = localeDate.split(','),
        splitDayMonth = splitLocaleDate[1].trim().split(' ');

        return (
          <EventContainer key={node.id}>
            <EventDate>
              <Details>{splitLocaleDate[0]}</Details>
              <EventDay>{splitDayMonth[0]}</EventDay>
              <Details>{splitDayMonth[1]}</Details>
            </EventDate>
            <EventDetails>
              <img src={node.categories ? `/img/${node.categories[0]}.svg` : ''} />
              <EventInfo>
                <h3>{node.title}</h3>
                {/* TODO: Why getMinutes shows just the first digit */}
                <Details>{date.getHours()}:{date.getMinutes()}0</Details>
                <p>Водещи: {
                    node.hosts.map((host, index) => {
                      return <span key={index}>{host}</span>
                    })
                  } 
                </p>
                <p>{node.description.description.slice(0, 300)}</p>
              </EventInfo>
            </EventDetails>
          </EventContainer>
        )
      })}
    </CalendarContainer>
  )
}

export default Events
