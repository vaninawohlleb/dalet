const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const event = path.resolve(`./src/templates/event.js`),
    classItem = path.resolve(`./src/templates/class-item.js`),
    consultation = path.resolve(`./src/templates/consultation.js`),
    blogPost = path.resolve(`./src/templates/blog-post.js`),
    consultant = path.resolve(`./src/templates/consultant.js`);
  
  const result = await graphql(`
    {
      allContentfulConsultant {
        edges {
          node {
            id
            slug
          }
        }
      }

      allContentfulPost {
        edges {
          node {
            id
            slug
            categories
          }
        }
      }

      allContentfulConsultation {
        edges {
          node {
            id
            slug
          }
        }
      }

      allContentfulClass {
        edges {
          node {
            id
            slug
            categories
          }
        }
      }

      allContentfulEvent {
        edges {
          node {
            id
            slug
            categories
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  // Create all data arrays
  const events = result.data.allContentfulEvent.edges,
      classes = result.data.allContentfulClass.edges,
      consultations = result.data.allContentfulConsultation.edges,
      posts = result.data.allContentfulPost.edges,
      consultants = result.data.allContentfulConsultant.edges


  function createAll(items, path, component) {
    items.forEach((item) => {
      // const previous = index === posts.length - 1 ? null : posts[index + 1].node
      // const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `${path}/${item.node.slug}`,
        component,
        context: {
          slug: item.node.slug,
        },
      })
    })
  }
  
  createAll(events, 'event', event);
  createAll(classes, 'class', classItem);
  createAll(consultations, 'consultation', consultation);
  createAll(posts, 'post', blogPost);
  createAll(consultants, 'consultant', consultant);
}

