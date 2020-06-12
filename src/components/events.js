import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby";

const CalendarContainer = styled.ul`
  padding: var(--big) 0;
  margin: 0 auto;
  background: var(--dark-grey);
  color: white;
`

const EventContainer = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 20vw 80vw;
  grid-column-gap: var(--medium);
  justify-content: center;
  padding: var(--big);
  transition: all .5s;
  transform: translateX(5%);

  &:after {
    content: "";
    position: absolute;
    right: 0;
    width: var(--big);
    height: 100%;
  }

  &:hover {
    transition: all .5s;
    transform: translateX(0%);
  }

  &.meditation {
    h3, .color {
      color: var(--yellow);
    }

    &:after {
      background: var(--yellow);
    }
  }

  &.astrology {
    h3, .color {
      color: white;
    }

    &:after {
      background: white;
    }
  }

  &.taro {
    h3, .color {
      color: var(--green);
    }

    &:after {
      background: var(--green);
    }
  }

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
  padding: 0 var(--huge);
  
  .body-text {
    font-family: var(--body-text);
    color: white;
  }

  p {
    margin: .5rem 0;
  }
`

const EventDay = styled.div `
  font-family: var(--heading-text);
  font-weight: 800;
  font-size: 5rem;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`
const ButtonH5 = styled.h5`
  padding: var(--small);
  color: var(--dark-grey);
  margin: var(--medium) auto;

  background: linear-gradient(to right, var(--yellow), var(--yellow) 50%, white 50%);
  background-clip: text;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;

  &:hover {
    background-position: 0 100%;
  }
`

const Events = ({nodes}) => {
  return (
    <CalendarContainer id="events"> {
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
            <EventContainer key = {node.id} className = {node.categories ? node.categories[0] : ''}>
              <EventDate>
                <h5>{splitLocaleDate[0]}</h5>
                <EventDay>{splitDayMonth[0]}</EventDay>
                <h5>{splitDayMonth[1]}</h5>
              </EventDate>
              <EventDetails>
                <img src={node.categories ? `/img/${node.categories[0]}.svg` : ''} />
                <EventInfo>
                  <Link to={`event/${node.slug}`}>
                    <h3>{node.title}</h3>
                  {/* TODO: Why getMinutes shows just the first digit */}
                  <p className="uppercase body-text" >{date.getHours()}:{date.getMinutes()}0</p>
                  <div className="color"><h5>Водещи: </h5> {
                      node.hosts.map((host, index) => {
                        return <span className="dotted body-text" key={index}>{host}</span>
                      })
                    } 
                  </div>
                  <p className="body-text">{node.description.description.slice(0, 300)}</p>
                  {node.repeatingEvent && node.repeatingEvent === true &&
                    <p className="uppercase color dotted">Повтарящо се събитие</p>
                  }
                  </Link>
                </EventInfo>
              </EventDetails>
            </EventContainer>
          )
        })}
      <ButtonContainer>
        <Link to="/events"><ButtonH5>Виж всички събития</ButtonH5></Link>
      </ButtonContainer>
    </CalendarContainer>
  )
}

export default Events
