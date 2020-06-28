const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/components/blog-template.jsx`)

  const blogs = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/(blog)/" } }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (blogs.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  blogs.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: '/blog/' + node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
        pathForBlog: node.frontmatter.path,
      }, // additional data can be passed via context
    })
  })

  const books = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/(books)/" } }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (books.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  books.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: '/books/' + node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
        pathForBlog: node.frontmatter.path,
      }, // additional data can be passed via context
    })
  })
}
