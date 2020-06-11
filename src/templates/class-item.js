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
  align-items: center;
  background: var(--dark-grey);
  color: white;

  h2 {
    color: var(--yellow);
  }
`

const Teachers = styled.div`
  a {
    font-family: var(--body-text);
    color: var(--yellow);
  }
`
const BodyWrapper = styled.section`

`
const HeaderText = styled.hgroup`
  .dotted {
    &.force {
      &:before {
        content: "•";
        padding: 10px;
      }

      &:after {
        content: "•";
        padding: 10px;
      }
    }
  }
`


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
        <div>
          Продължителност
          <span className="dotted">{classItem.length}</span>
        </div>
        <div>
          <p>Старт<span className="force dotted">{startLocaleDate}</span></p>
          <p>Край<span className="dotted">{endLocaleDate}</span></p>
        </div>
        {classItem.teachers && 
        <Teachers>
          <span>Преподавател</span>
          {classItem.teachers.map((teacher, i) => {
              return (
                <Link key={i} className="dotted" to={`consultant/${teacher.slug}`}>{teacher.name}</Link>
              )
            })}
        </Teachers>
        }
        <div>
          <span className="dotted">Цена</span>
          <span className="dotted">{classItem.priceDetails}</span>
        </div>
      </HeaderText>
    </Header>
    <BodyWrapper>
      <Body node={classItem.description} />
      {classItem.importantInfo &&
        <TextModule node={classItem.importantInfo[0]} />
      }
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
    importantInfo {
      title
      description {
        childMarkdownRemark {
          html
        }
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