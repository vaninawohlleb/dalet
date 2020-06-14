import React from "react";
import Layout from "../components/layout";
import Img from 'gatsby-image';
import styled from 'styled-components';
import { graphql, Link } from "gatsby";
import Body from "../components/body";
import TextModule from "../components/text-module";

const Header = styled.section`
  max-width: var(--max-width-large);
  padding: var(--big);
  margin: 0 auto;
  background: var(--dark-grey);
  color: white;

  h2 {
    color: var(--yellow);
  }

  @media (min-width: 768px) {
    padding: var(--large) 0 var(--xxl);
    display: grid;
    grid-template-columns: 47vw 40vw;
    grid-column-gap: var(--big);
    justify-content: center;
    align-items: center;
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
`


const ClassItem = ({ data, location }) => {
  const classItem = data.contentfulClass;
  const rootPath = `${__PATH_PREFIX__}/`;

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
          <span className="dotted all">{classItem.length}</span>
        </div>
        <div>
          <p>Старт<span className="dotted all">{startLocaleDate}</span></p>
          <p>Край<span className="dotted all">{endLocaleDate}</span></p>
        </div>
        {classItem.teachers && 
        <Teachers>
          <span>Преподавател</span>
          {classItem.teachers.map((teacher, i) => {
              return (
                <Link key={i} className="dotted all" to={`${rootPath}consultant/${teacher.slug}`}>{teacher.name}</Link>
              )
            })}
        </Teachers>
        }
        <div>
          <span>Цена</span>
          <span className="dotted all">{classItem.priceDetails}</span>
        </div>
      </HeaderText>
    </Header>
    <BodyWrapper>
      {classItem.description &&
        <Body node={classItem.description} />
      }
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