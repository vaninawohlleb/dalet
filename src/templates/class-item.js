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
  align-items: center;
  background: var(--grey);
`

const BodyWrapper = styled.section`

`
const HeaderText = styled.hgroup``


const ClassItem = ({ data, location }) => {
  const classItem = data.contentfulClass;

  const startDate = new Date(classItem.start),
    startDateOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    },
    startLocaleDate = startDate.toLocaleDateString('BG', startDateOptions);

  const endDate = new Date(classItem.end),
    endDateOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    },
    endLocaleDate = endDate.toLocaleDateString('BG', endDateOptions);
  return (
  <Layout>
    <Header>
      <Img fluid={classItem.classImage.fluid} imgStyle={{ objectFit: 'contain' }}/>
      <HeaderText>
        <h2>{classItem.title}</h2>
        <span className="dotted">Продължителност: {classItem.length}</span>
        <span className="middle dotted">Старт: {startLocaleDate}</span>
        <span className="dotted">Край: {endLocaleDate}</span>
        {classItem.teachers && 
        <p>С
        {classItem.teachers.map((teacher) => {
            return (
              <Link to={`consultant/${teacher.slug}`}>{teacher.name}</Link>
            )
          })}
        </p>
        }
        <p>Цена: {classItem.priceDetails}</p>
      </HeaderText>
    </Header>
    <BodyWrapper>
      <Body node={classItem.description} />
    </BodyWrapper>
  </Layout>
  )
}

export default ClassItem

export const ClassQuery = graphql`
query ClassQuery($slug: String!) {
  contentfulClass(slug: {eq: $slug}) {
    id
    categories
    length
    priceDetails
    start
    title
    end
    teachers {
      id
      name
      slug
    }
    description {
      childMarkdownRemark {
        html
      }
    }
    classImage {
      fluid(maxWidth: 800) {
        ...GatsbyContentfulFluid
      }
    }
  }
}
`