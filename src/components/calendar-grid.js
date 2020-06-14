import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby";
import Button from "./button";

const CalendarContainer = styled.ul`
  padding: var(--big) 0;
  margin: 0 auto;
  background: var(--dark-grey);
  color: white;
  overflow-x: hidden;
`

const EventContainer = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 18vw 80vw;
  grid-column-gap: var(--medium);
  justify-content: center;
  padding: var(--big);
  transform: translateX(6%);

  @media (min-width: 768px) { 
    transition: all .5s;
    transform: translateX(3%);
  }
  
  h3, .color {
    color: white;
  }

  &:after {
    content: "";
    position: absolute;
    right: 0;
    width: var(--big);
    height: 100%;
    background: white;
  }

  &:hover {
    @media (min-width: 768px) {
      transition: all .5s;
      transform: translateX(0%);
    }
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
    display: none;
    
    @media (min-width: 768px) { 
      display: block;
      align-self: flex-start;
      margin-top: var(--tiny);
      min-width: 4.5vw;
    }
  }
`

const EventInfo = styled.div`
  padding: 0 var(--huge) 0 var(--small);
  
  p, span {
    font-family: var(--body-text);

    &:not(.color) {
      color: white;
    }
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

const Events = ({nodes, location}) => {
  const rootPath = `${__PATH_PREFIX__}/`

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
                  <Link to={
                      `${rootPath}event/${node.slug}`
                  }>
                  <h3>{node.title}</h3>
                  {node.hosts &&
                    <div>
                      <span className="dotted after">Водещи</span> {
                        node.hosts.map((host, index) => {
                          return <span className="dotted after" key={index}>{host}</span>
                        })
                      } 
                  </div>
                  }
                  {node.description.description && 
                    <p>{node.description.description.slice(0, 300)}</p>
                  }
                  {node.repeatingEvent && node.repeatingEvent === true &&
                    <p className="uppercase color dotted all">Повтарящо се събитие</p>
                  }
                  </Link>
                </EventInfo>
              </EventDetails>
            </EventContainer>
          )
        })}
      <ButtonContainer>
        <Link to="/events">
          <Button color="var(--dark-grey)" changedBgr="white" originBgr="var(--yellow)" cta="Виж всички събития" />
        </Link>
      </ButtonContainer>
    </CalendarContainer>
  )
}

export default Events
